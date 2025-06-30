import { Component, inject } from '@angular/core';
import { Cards } from '../cards/cards';
import { productService } from '../services/productService';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-wrapper-cards',
  standalone: true,
  imports: [CommonModule, Cards],
  templateUrl: './wrapper-cards.html',
  styleUrl: './wrapper-cards.scss',
})
export class WrapperCards {
  private productService = inject(productService);

  protected products = this.productService.products;

  ngOnInit() {
    this.productService.getProduct();
  }
}
