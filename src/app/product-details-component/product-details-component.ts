import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { productService } from '../services/productService';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  private route = inject(ActivatedRoute);
  private productService = inject(productService);
  private cartService = inject(CartService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  increaseQty() {
    if (this.cartService.isInCart(this.product.id)) {
      this.cartService.increaseQuantity(this.product.id);
    } else {
      this.cartService.addToCart(this.product);
    }
  }

  decreaseQty() {
    if (this.cartService.isInCart(this.product.id)) {
      this.cartService.decreaseQuantity(this.product.id);
    }
  }

  get quantity() {
    const item = this.cartService.cartItems().find(p => p.id === this.product.id);
    return item?.quantity || 0;
  }

  addProduct() {
  this.cartService.addToCart(this.product);
}
}
