import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPlayersComponent } from './components/register-players/register-players.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { RegisterScoreComponent } from './components/register-score/register-score.component';







const routes: Routes = [
  {path : "registrar-player", component :RegisterPlayersComponent },
  {path: "listar-player", component :ListPlayersComponent},
  {path: "adicionar-pontos/:id",component:RegisterScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
