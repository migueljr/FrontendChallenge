import {Component, OnInit} from "@angular/core";
import {TeamsService} from "../../services/teams.service";
import {Router} from "@angular/router";

@Component({
  selector:'app-insert-teams',
  templateUrl: './tournament.component.html',
  styleUrls:['./tournament.component.scss']
})

export default class TournamentComponent implements OnInit{

  listTeams!: any;
  semifinal!:any[]
  final!:any[]

  constructor(private service: TeamsService, private router: Router){
    this.semifinal = this.service.getSemifinal()
    this.final = this.service.getFinal()
  }

  setDatateams(data:any,block:number){
    let teamCopy = JSON.parse(JSON.stringify(data))
      if(block==1 && data.step!=1) return;
      if(block==2 && data.step!=2) return;
      if(block==3 && data.step!=3) return;
      console.log(data)
      if(teamCopy.destiny=='b1' || teamCopy.destiny=='b2' || teamCopy.destiny=='b3' || teamCopy.destiny=='b4')
        this.service.setDataTeam(data)
      if(teamCopy.destiny=='c2' || teamCopy.destiny=='c1')
        this.service.setDataTeamFinal(data)
  }

  setChampion(data:any){
    this.service.setChampion(data)
    this.router.navigateByUrl('/congratulation')
  }

  ngOnInit() {
    if(this.service.getListTeams().length === 0){
      this.router.navigateByUrl('/')
    }
    this.listTeams = this.service.getListTeams()
  }
}
