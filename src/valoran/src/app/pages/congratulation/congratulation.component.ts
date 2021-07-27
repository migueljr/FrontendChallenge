import {Component, OnInit} from "@angular/core";
import {TeamsService} from "../../services/teams.service";
import {Router} from "@angular/router";

@Component({
  selector:'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls:['./congratulation.component.scss']
})
export default class CongratulationComponent implements OnInit{

  champion: any;

  constructor(private service: TeamsService, private router: Router){
    this.champion = this.service.getChampion()
    console.log(this.champion)
  }

  goHomeAndReset(){
    this.service.resetAll()
    this.router.navigateByUrl('/')
  }

  ngOnInit(){
    if(!this.champion)
      this.router.navigateByUrl('/')
  }


}
