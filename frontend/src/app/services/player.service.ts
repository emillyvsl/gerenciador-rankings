import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = environment.API_URL;

  constructor(private http:HttpClient) { }
  createPlayer(player: Player) {
    return this.http.post(`${this.baseUrl}/players`, player);
  }
  listPlayers() {
    return this.http.get(`${this.baseUrl}/players`);
  }
}
