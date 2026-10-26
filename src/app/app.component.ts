import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
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
      p => this.filter() === 'TODAS' || p.type === this.filter()
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
    this.count.update(n => n + 1);
    this.notify('AGREGADA A TU BOLSA ↗');
  }

  toggle(id: number) {
    this.favorite.update(a =>
      a.includes(id)
        ? a.filter(i => i !== id)
        : [...a, id]
    );
  }

  tilt(e: PointerEvent) {
    if (
      e.pointerType === 'touch' ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      '--rx',
      `${-(e.clientY - r.top - r.height / 2) / 25}deg`
    );

    el.style.setProperty(
      '--ry',
      `${(e.clientX - r.left - r.width / 2) / 25}deg`
    );
  }

  reset(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;

    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }
}
