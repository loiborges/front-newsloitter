import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categoria} from '../entity/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseURL = 'http://localhost:8080/categoria';

  constructor(
   private httpClient: HttpClient
  ) { }

  getAllCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
  }

  createCategoria(categoria: Categoria): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, categoria);
  }

  updateCategoria(id: number, categoria: Categoria): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
