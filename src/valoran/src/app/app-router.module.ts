import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import WelcomeComponent from "./pages/welcome/welcome.component";
import InsertTeamsComponent from "./pages/insert-teams/insert-teams.component";
import TournamentComponent from "./pages/tournament/tournament.component";
import CongratulationComponent from "./pages/congratulation/congratulation.component";

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch: 'full'},
  {path:'welcome', component: WelcomeComponent},
  {path:'insert-teams', component: InsertTeamsComponent},
  {path:'tournament', component: TournamentComponent},
  {path:'congratulation', component: CongratulationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
