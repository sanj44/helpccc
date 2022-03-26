import { Component, OnInit } from '@angular/core';

interface message {
  from:string,
  message:string
}

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  messageArray:message[]=[];
  inputVal=""
  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.messageArray.push({from:"bot",message:"Hi How may i help!"})
    }, 500);
  }
  send(val:string){
    if(val){
    console.log(val);
    let obj={from:"user",message:val}
    this.messageArray.push(obj)
    setTimeout(() => {
    this.messageArray.push({from:"bot",message:"Service call: Bot reply"})
  }, 300);
    this.inputVal=""
    }
  }

}
