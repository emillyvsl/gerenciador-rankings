import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPlayersComponent } from './components/register-players/register-players.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';







const routes: Routes = [
  {path : "registrar-player", component :RegisterPlayersComponent },
  {path: "listar-player", component :ListPlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
