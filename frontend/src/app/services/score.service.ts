import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private baseUrl = environment.API_URL;

  constructor(
    private http: HttpClient) { }
    createScore(score: Score) {
      return this.http.post(`${this.baseUrl}/scores`, score);
    }
}
