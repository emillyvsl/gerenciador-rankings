import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Player } from 'src/app/models/player';
import { Score } from 'src/app/models/score';
import { PlayerService } from 'src/app/services/player.service';
import { ScoreService } from 'src/app/services/score.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-score',
  templateUrl: './register-score.component.html',
  styleUrls: ['./register-score.component.scss']
})
export class RegisterScoreComponent {
  playerId: string = '';
  player: Player = <Player>{};
  score: Score = <Score>{};
  isSubmit : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private scoreService: ScoreService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      this.getPlayer(this.playerId);
      console.log(this.player);
    });
  }

  getPlayer(id: string) {
    this.playerService.getPlayer(id).subscribe(
      (data: Player) => { // Alterado para esperar um objeto Player
        console.log(data);
        this.player = data;
        console.log(this.player);
      },
      error => {
        console.log(error);
      }
    );
  }
  submit(form: NgForm) {
    this.isSubmit = true;
    this.score.player = this.playerId;
    this.scoreService.createScore(this.score).pipe(
      catchError((error) => {
        this.isSubmit = false;
        return error;
      }
    )).subscribe({
      complete: () => {
        this.router.navigate(['/listar-player']);
        Swal.fire('Pontuação registrada com sucesso!', '', 'success');
      }
    });
  }
}
