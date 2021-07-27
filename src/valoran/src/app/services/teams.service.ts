import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  private listTeams: any[];
  private semifinais: any[] = [];
  private finais: any[] = [];
  private champion: any = null

  constructor() {
    this.listTeams = [

    ]
  }

  getListTeams() {
    return this.listTeams
  }

  getChampion() {
    return this.champion
  }

  getFinal() {
    return this.finais
  }

  getSemifinal() {
    return this.semifinais
  }

  resetAll(){
    this.listTeams = []
    this.semifinais = []
    this.finais = []
  }

  insertTeam(team: any) {
    console.log(this.listTeams.length)
    if(this.listTeams.length <= 1) team.destiny = 'b1'
    if(this.listTeams.length == 2 || this.listTeams.length == 3) team.destiny = 'b2'
    if(this.listTeams.length == 4 || this.listTeams.length == 5) team.destiny = 'b3'
    if(this.listTeams.length == 6 || this.listTeams.length == 7) team.destiny = 'b4'
    team.order = null
    team.step = 1
    team.active = true
    this.listTeams.push(team)
  }

  setDataTeam(team: any){
    let i = 1
    let teamCopy = JSON.parse(JSON.stringify(team))
    this.listTeams.map((item, i) => {
      if (item.name == teamCopy.name) {
        this.listTeams[i].destiny = this.returnDestiny(teamCopy.destiny)
        this.listTeams[i].step = 2
        this.listTeams[i].order = i
        this.semifinais.push(item)
      }
      if (item.destiny == teamCopy.destiny && item.name != teamCopy.name) {
        this.listTeams[i].destiny = this.returnDestiny(teamCopy.destiny)
        this.listTeams[i].active = false
        this.listTeams[i].step = 2
        this.listTeams[i].order = i
      }
      i++
    })

  }

  setDataTeamFinal(team: any){
    let i = 1
    let teamCopy = JSON.parse(JSON.stringify(team))
    this.semifinais.map((item, i) => {
      if (item.name == teamCopy.name) {
        this.semifinais[i].destiny = this.returnDestiny(teamCopy.destiny)
        this.semifinais[i].step = 3
        this.semifinais[i].order = i
        this.finais.push(item)
      }
      if (item.destiny == teamCopy.destiny && item.name != teamCopy.name) {
        this.semifinais[i].destiny = this.returnDestiny(teamCopy.destiny)
        this.semifinais[i].active = false
        this.semifinais[i].step = 3
        this.semifinais[i].order = i
      }
      i++
    })
  }

  setChampion(team:any){
    this.champion = team
  }



  returnDestiny(destinyFrom:any){

    if(destinyFrom=='b1') return 'c1';
    if(destinyFrom=='b2') return 'c1';
    if(destinyFrom=='b3') return 'c2';
    if(destinyFrom=='b4') return 'c2';

    if(destinyFrom=='c1') return 'd1';
    if(destinyFrom=='c2') return 'd2';

    return null

  }
}
