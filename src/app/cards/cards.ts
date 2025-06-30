import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() product: any;

  private cartService = inject(CartService);

  private router = inject(Router);

  ngOnInit() {
    console.log('✅ product from ngOnInit:', this.product);
  }

  isInCart(product: any): boolean {
    return this.cartService.isInCart(product.id);
  }

  toggleCart(product: any) {
    if (this.isInCart(product)) {
      this.cartService.removeFromCart(product.id);
    } else {
      this.cartService.addToCart(product);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
