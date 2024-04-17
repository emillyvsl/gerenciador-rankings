import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent {
  register: Player = <Player>{};
  isSubmit : boolean = false;
  constructor(private http: HttpClient, private router: Router, private playerService: PlayerService) { }

  submit(form: NgForm) {
    if (form.valid) {
      this.isSubmit = true;
      this.playerService.createPlayer(this.register).pipe(
        catchError((error) => {
          this.isSubmit = false;
          return error;
        })
      ).subscribe({complete: () => {
        this.router.navigate(['/listar-player']);
      }
    })
    }
  }

}
