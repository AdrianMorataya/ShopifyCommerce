import { Component, computed, signal } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  filter = signal('TODAS');
  count = signal(0);
  toast = signal('');
  favorite = signal<number[]>([]);

  products = [
    {
      id: 0,
      name: 'ORIGINAL BLACK',
      type: 'SNAPBACK',
      price: 249,
      color: '#30372c',
      accent: '#EDE8D0',
      tag: 'BEST SELLER'
    },
    {
      id: 1,
      name: 'SAND DISTRICT',
      type: 'DAD HAT',
      price: 229,
      color: '#b4a789',
      accent: '#EDE8D0',
      tag: 'ESSENTIAL'
    },
    {
      id: 2,
      name: 'OLIVE UNDERGROUND',
      type: 'SNAPBACK',
      price: 269,
      color: '#637448',
      accent: '#EDE8D0',
      tag: 'NUEVO DROP'
    }
  ];

  visible = computed(() =>
    this.products.filter(
      product =>
        this.filter() === 'TODAS' ||
        product.type === this.filter()
    )
  );

  timer: ReturnType<typeof setTimeout> | undefined;

  notify(message: string) {
    this.toast.set(message);

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.toast.set('');
    }, 2400);
  }

  add() {
    this.count.update(count => count + 1);
    this.notify('AGREGADA A TU BOLSA ↗');
  }

  toggle(id: number) {
    this.favorite.update(favorites =>
      favorites.includes(id)
        ? favorites.filter(favoriteId => favoriteId !== id)
        : [...favorites, id]
    );
  }

  tilt(event: PointerEvent) {
    if (
      event.pointerType === 'touch' ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const element = event.currentTarget as HTMLElement;
    const rectangle = element.getBoundingClientRect();

    element.style.setProperty(
      '--rx',
      `${-(event.clientY - rectangle.top - rectangle.height / 2) / 25}deg`
    );

    element.style.setProperty(
      '--ry',
      `${(event.clientX - rectangle.left - rectangle.width / 2) / 25}deg`
    );
  }

  reset(event: PointerEvent) {
    const element = event.currentTarget as HTMLElement;

    element.style.setProperty('--rx', '0deg');
    element.style.setProperty('--ry', '0deg');
  }
}