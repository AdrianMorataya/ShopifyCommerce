import { Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  readonly auth = inject(AuthService);
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly destroyRef = inject(DestroyRef);
  readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('accountDialog');
  readonly tab = signal<'login' | 'register'>('login');
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly showPassword = signal(false);

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  readonly registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/\S/)]],
    lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/\S/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]+$/)]],
    confirm: ['', Validators.required]
  });

  open() { this.dialog().nativeElement.showModal(); }
  close() { this.dialog().nativeElement.close(); }
  changeTab(tab: 'login' | 'register') {
    if (this.busy()) return;
    this.tab.set(tab);
    this.error.set('');
    this.notice.set('');
    this.showPassword.set(false);
  }

  submitLogin() {
    if (this.busy()) return;
    this.error.set(''); this.notice.set('');
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) { this.error.set('Escribe un correo válido y tu contraseña.'); return; }
    const value = this.loginForm.getRawValue();
    this.busy.set(true);
    this.auth.login({email: value.email.trim(), password: value.password}).pipe(
      takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))
    ).subscribe({
      next: () => { this.loginForm.reset(); this.notice.set('Ya eres parte del código. Bienvenido.'); },
      error: (error: HttpErrorResponse) => { this.auth.logout(); this.error.set(this.message(error)); }
    });
  }

  submitRegister() {
    if (this.busy()) return;
    this.error.set(''); this.notice.set('');
    this.registerForm.markAllAsTouched();
    const value = this.registerForm.getRawValue();
    if (this.registerForm.invalid) { this.error.set('Revisa los campos. La contraseña necesita 8 caracteres, mayúscula, minúscula y número.'); return; }
    if (value.password !== value.confirm) { this.error.set('Las contraseñas no coinciden.'); return; }
    this.busy.set(true);
    this.auth.register({firstName:value.firstName.trim(),lastName:value.lastName.trim(),email:value.email.trim(),password:value.password}).pipe(
      takeUntilDestroyed(this.destroyRef), finalize(() => this.busy.set(false))
    ).subscribe({
      next: () => {
        this.registerForm.reset();
        this.loginForm.patchValue({email:value.email.trim(), password:''});
        this.tab.set('login'); this.showPassword.set(false);
        this.notice.set('Cuenta creada. Ahora inicia sesión con tu correo y contraseña.');
      },
      error: (error: HttpErrorResponse) => this.error.set(this.message(error))
    });
  }

  logout() { this.auth.logout(); this.notice.set('Sesión cerrada. Nos vemos en la calle.'); }
  private message(error: HttpErrorResponse): string {
    if (error.status === 0 || [502,503,504].includes(error.status)) return 'No pudimos conectar con la API. Comprueba que el backend esté funcionando.';
    if (error.status === 401) return 'Correo o contraseña incorrectos, o sesión caducada.';
    if (error.status === 409) return 'Este correo ya tiene una cuenta. Inicia sesión.';
    if (error.status >= 500) return 'El servidor no pudo completar la solicitud. Intenta de nuevo.';
    const errors = error.error?.errors;
    if (Array.isArray(errors)) return errors.join(' ');
    if (errors && typeof errors === 'object') return Object.values(errors).flat().join(' ');
    return 'Revisa los datos e intenta nuevamente.';
  }
}
