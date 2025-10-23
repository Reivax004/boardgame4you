import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'https://boardgamegeek.com/xmlapi/'; // URL de base de ton API

  constructor(private http: HttpClient) {}

  // Exemple GET
  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  // Exemple POST
  postData(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/data`, payload);
  }

  // Exemple PUT
  updateData(id: number, payload: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/data/${id}`, payload);
  }

  // Exemple DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/data/${id}`);
  }

  getGamebyID(id: number){
    return this.http.get(`${this.baseUrl}boardgame/${id}`);
  }
}
