import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class productService {
  private apiurl = 'https://dummyjson.com/products';
  private http = inject(HttpClient);

  constructor() {}
  private _products =signal<any[]>([]);
  products =this._products;


  getProduct() {
  this.http
    .get<{ products: any[] }>(this.apiurl)
    .subscribe((response) => {
      this._products.set(response.products);
    });
}

  getProductById(id: string | number): Observable<any> {
    return this.http.get(`${this.apiurl}/${id}`);
  }
}
