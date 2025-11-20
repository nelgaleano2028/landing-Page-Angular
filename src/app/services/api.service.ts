import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(this.urlBase);
  }

  getProductById(id: number): Observable<IProducto> {
    return this._http.get<IProducto>(`${this.urlBase}/${id}`);
  }
}
