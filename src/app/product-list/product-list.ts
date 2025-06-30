
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  get totalAmount() {
    return this.cartService.getTotalAmount();
  }

  increaseQuantity(id: number) {
    this.cartService.increaseQuantity(id);
  }

  decreaseQuantity(id: number) {
    this.cartService.decreaseQuantity(id);
  }

  removeProduct(id: number) {
    this.cartService.removeFromCart(id);
  }
}
