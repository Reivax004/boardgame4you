import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BoardGame} from '../models/boardgame';

@Injectable({
  providedIn: 'root'
})
export class Api {
  // Préfixe local pour le proxy Angular
  private baseUrl = '/api/';

  constructor(private http: HttpClient) {}

  /**
   * Récupère un jeu BoardGameGeek par son ID
   * L'API retourne du XML, donc responseType: 'text'
   */
  getGameByID(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}boardgame/${id}`, { responseType: 'text' });
  }

}
