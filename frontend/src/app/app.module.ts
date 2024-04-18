import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPlayersComponent } from './components/register-players/register-players.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { FormsModule } from '@angular/forms';
import { RegisterScoreComponent } from './components/register-score/register-score.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPlayersComponent,
    ListPlayersComponent,
    RegisterScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
