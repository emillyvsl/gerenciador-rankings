import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player';
import { PlayerScore } from '../models/player-score';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = environment.API_URL;

  constructor(private http:HttpClient) { }
  createPlayer(player: Player) {
    return this.http.post(`${this.baseUrl}/players`, player);
  }
  listPlayersScore() {
    return this.http.get<PlayerScore[]>(`${this.baseUrl}/scores/soma`);
  }
  getPlayer(id: string) {
    return this.http.get<Player>(`${this.baseUrl}/players/${id}`);
  }
}
