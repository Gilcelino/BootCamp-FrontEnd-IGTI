import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../interfaces/imenu';

const url = 'http://localhost:3000/cardapio'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<IMenu[]> {
    return this.httpClient.get<IMenu[]>(url);
  }

} 
