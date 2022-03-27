import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  
  title = 'help';
  botHelp=false;
  centered = true;
  disabled = false;
  unbounded = false;

  radius: number=20;
  color: string;
  logInStatus:boolean=false;
  username: any;
  constructor(private router:Router){
    if(sessionStorage["logInStatus"]==="true"){
    this.logInStatus=true
    }
    else{
      this.logInStatus=false
    }
  }
  ngDoCheck(): void {
    if(sessionStorage["logInStatus"]==="true"){
      this.logInStatus=true;
      this.username=sessionStorage["username"]
      }
      else{
        this.logInStatus=false
        this.username=sessionStorage["username"]
      }
  }
  ngOnInit(): void {
    
  }
  toggleLogIn(){
    if(this.logInStatus){
      this.logInStatus=false;
      sessionStorage.clear();
    }
    else{
      //this.logInStatus=true;
    }
    this.router.navigate(["login"])
    sessionStorage["logInStatus"]=this.logInStatus;
    }

  showBotHelp(){
    this.botHelp=!this.botHelp
  }
}

