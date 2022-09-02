import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Produto } from './../models/produto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  url = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url);
  }

  getProductsByType(type: string): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(
      'http://localhost:3000/productType/' + type
    );
  }

  getCategory(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>('http://localhost:3000/category');
  }
}
