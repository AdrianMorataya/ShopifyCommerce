import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'complete';
type PaymentMethod = 'card' | 'transfer' | 'cash';

interface CartItem {
  id: number;
  name: string;
  type: string;
  color: string;
  accent: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('checkoutDialog');
  readonly step = signal<CheckoutStep>('cart');
  readonly paymentMethod = signal<PaymentMethod>('card');
  readonly shipping = signal<'standard' | 'express'>('standard');

  // Datos de muestra: este carrito todavía no está conectado al catálogo ni a la API.
  readonly items = signal<CartItem[]>([
    {
      id: 0,
      name: 'ORIGINAL BLACK',
      type: 'SNAPBACK / AJUSTABLE',
      color: '#35233f',
      accent: '#ede8d0',
      quantity: 1,
      price: 249
    },
    {
      id: 1,
      name: 'SAND DISTRICT',
      type: 'DAD HAT / AJUSTABLE',
      color: '#a99a7a',
      accent: '#e4c441',
      quantity: 1,
      price: 229
    }
  ]);

  readonly quantity = computed(() =>
    this.items().reduce((total, item) => total + item.quantity, 0)
  );

  readonly subtotal = computed(() =>
    this.items().reduce((total, item) => total + item.price * item.quantity, 0)
  );

  readonly shippingCost = computed(() => {
    if (this.items().length === 0) return 0;
    return this.shipping() === 'express' ? 45 : 25;
  });

  readonly total = computed(() => this.subtotal() + this.shippingCost());

  delivery = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    municipality: '',
    address: '',
    reference: '',
    notes: ''
  };

  open() {
    this.step.set('cart');
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  goTo(step: CheckoutStep) {
    if (this.items().length === 0 && step !== 'cart') return;
    this.step.set(step);
    this.dialog().nativeElement.scrollTop = 0;
  }

  changeQuantity(id: number, amount: number) {
    this.items.update(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + amount)) }
          : item
      )
    );
  }

  remove(id: number) {
    this.items.update(items => items.filter(item => item.id !== id));
  }

  restoreDemo() {
    this.items.set([
      {
        id: 0,
        name: 'ORIGINAL BLACK',
        type: 'SNAPBACK / AJUSTABLE',
        color: '#35233f',
        accent: '#ede8d0',
        quantity: 1,
        price: 249
      },
      {
        id: 1,
        name: 'SAND DISTRICT',
        type: 'DAD HAT / AJUSTABLE',
        color: '#a99a7a',
        accent: '#e4c441',
        quantity: 1,
        price: 229
      }
    ]);
    this.step.set('cart');
  }

  money(value: number): string {
    return `Q ${value.toFixed(2)}`;
  }
}
