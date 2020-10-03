import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = ' https://uiexercise.onemindindia.com/api/'

  }

  getProductLists(){
    return this.http.get(this.baseUrl+'product');
  }

  addProduct(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.http.post(this.baseUrl+'Product',data, { headers: headers})
  }

  orderProduct(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.http.post(this.baseUrl+'OrderProducts',data, { headers: headers})
  }
}
