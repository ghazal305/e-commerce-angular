import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = signal<any[]>([]);

  cartItems = this._cartItems;

  addToCart(product: any) {
  this._cartItems.update((items) => {
    const index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const updatedItems = [...items];
      updatedItems[index].quantity += 1;
      return updatedItems;
    } else {
      return [...items, { ...product, quantity: 1 }];
    }
  });
}

  removeFromCart(productId: number) {
    this._cartItems.update((items) => {
      return items.filter((p) => p.id !== productId);
    });
  }

  isInCart(productId: number): boolean {
    return this._cartItems().some((p) => p.id === productId);
  }

  increaseQuantity(productId: number) {
  this._cartItems.update((items) => {
    return items.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  });
}

decreaseQuantity(productId: number) {
  this._cartItems.update((items) => {
    return items
      .map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); 
  });
}


getTotalAmount(): number {
  return this._cartItems().reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}


}
