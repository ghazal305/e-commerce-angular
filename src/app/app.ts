import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { ProductList } from './product-list/product-list';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,ProductDetailsComponent,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'signle-e-commerce';
}
