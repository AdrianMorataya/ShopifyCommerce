import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
export interface LoginRequest { email: string; password: string; }
export interface RegisterRequest extends LoginRequest { firstName: string; lastName: string; }
interface LoginResponse { message: string; token: string; expiresInMinutes: number; user: User; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly sessionToken = signal<string | null>(null);
  private readonly currentUser = signal<User | null>(null);
  private expiryTimer?: ReturnType<typeof setTimeout>;
  readonly user = this.currentUser.asReadonly();
  readonly token = this.sessionToken.asReadonly();
  readonly authenticated = computed(() => this.user() !== null && this.token() !== null);

  login(request: LoginRequest): Observable<User> {
    return this.http.post<LoginResponse>('/api/auth/login', request).pipe(
      tap(response => {
        clearTimeout(this.expiryTimer);
        this.sessionToken.set(response.token);
        this.expiryTimer = setTimeout(() => this.logout(), response.expiresInMinutes * 60_000);
      }),
      switchMap(() => this.refreshUser())
    );
  }

  register(request: RegisterRequest) {
    return this.http.post<{ message: string; user: User }>('/api/auth/register', request);
  }

  refreshUser(): Observable<User> {
    return this.http.get<User>('/api/auth/me').pipe(tap(user => this.currentUser.set(user)));
  }

  logout() {
    clearTimeout(this.expiryTimer);
    this.sessionToken.set(null);
    this.currentUser.set(null);
  }
}
