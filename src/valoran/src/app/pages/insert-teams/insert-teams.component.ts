import {Component, OnInit} from "@angular/core";
import {TeamsService} from "../../services/teams.service";

@Component({
  selector:'app-insert-teams',
  templateUrl: './insert-teams.component.html',
  styleUrls:['./insert-teams.component.scss']
})
export default class InsertTeamsComponent implements OnInit{
  listTeams!: any;
  data!: any

  constructor(private service: TeamsService) {
  }

  addTeam(){
    if(!this.data.name || this.data.name == '') return
    if(this.service.getListTeams().filter((item:any)=>item.name==this.data.name).length) return
    this.service.insertTeam(this.data)
    this.data = {}
  }

  ngOnInit(){
    this.listTeams = this.service.getListTeams()
    this.data = {}
    console.log(this.service.getListTeams())
  }
}
