import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../cart-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private cartService = inject(CartService);
  private router = inject(Router);

  cartCount = computed(() => this.cartService.cartItems().length);

  goToCart() {
    this.router.navigate(['/productlist']);
  }
}
