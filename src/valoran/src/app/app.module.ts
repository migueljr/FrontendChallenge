import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import WelcomeComponent from "./pages/welcome/welcome.component";
import {AppRoutingModule} from "./app-router.module";
import InsertTeamsComponent from "./pages/insert-teams/insert-teams.component";
import TournamentComponent from "./pages/tournament/tournament.component";
import CongratulationComponent from "./pages/congratulation/congratulation.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InsertTeamsComponent,
    TournamentComponent,
    CongratulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
