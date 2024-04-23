import { Component } from '@angular/core';
import { PlayerScore } from 'src/app/models/player-score';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent {
  players: PlayerScore[] = [];
  loading: boolean = false; // Variável para controlar o estado de carregamento dos dados

  constructor(private playerService: PlayerService,
    private router: Router,
    private scoreService: ScoreService,
  ) { }

  ngOnInit(): void {
    this.listPlayers();
  }

  listPlayers() {
    this.loading = true; // Ativa o estado de carregamento
    this.playerService.listPlayersScore().subscribe(
      (data: PlayerScore[]) => {
        // Ordena os jogadores pelo totalScore, do maior para o menor
        this.players = data.sort((a, b) => b.totalScore - a.totalScore);

        // Adiciona a propriedade 'posicao' para cada jogador
        this.players.forEach((player, index) => {
          player.posicao = index + 1; // A posição começa em 1, não em 0
        });
        this.loading = false; // Desativa o estado de carregamento após receber os dados
      },
      error => {
        console.log(error);
        this.loading = false; // Desativa o estado de carregamento em caso de erro
      }
    );
  }

  openRegisterScore(id: number) {
    this.router.navigate(['/adicionar-pontos', id]);
  }

  openRegisterPlayer() {
    this.router.navigate(['/registrar-player']);
  }

  deletePlayer(id: number) {
    console.log(id);
    Swal.fire({
      title: 'Deseja realmente excluir este jogador?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.scoreService.deleteScore(id).subscribe({
          complete: () => {
            this.listPlayers();
            Swal.fire('Jogador excluído com sucesso!', '', 'success');
          }
        });
      }
    });
  }
}
