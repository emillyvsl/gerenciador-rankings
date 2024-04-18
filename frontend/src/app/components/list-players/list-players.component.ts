import { Component } from '@angular/core';
import { PlayerScore } from 'src/app/models/player-score';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent {
  players: PlayerScore[] = [];

  constructor(private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listPlayers();
  }

  listPlayers() {
    this.playerService.listPlayersScore().subscribe(
      (data: PlayerScore[]) => {
        // Ordena os jogadores pelo totalScore, do maior para o menor
        this.players = data.sort((a, b) => b.totalScore - a.totalScore);

        // Adiciona a propriedade 'posicao' para cada jogador
        this.players.forEach((player, index) => {
          player.posicao = index + 1; // A posição começa em 1, não em 0
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  openRegisterScore(id: number) {
    this.router.navigate(['/adicionar-pontos', id]);
  }
  openRegisterPlayer() {
    this.router.navigate(['/registrar-player']);
  }

}
