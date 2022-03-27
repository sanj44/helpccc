import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { InitiativeService } from 'src/app/services/initiative.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sessionVars: any;
  volForm: FormGroup ;
  requirement = new FormControl(null,[Validators.required]);
  orgData:any;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  HashTags: any[] = [];
  details: any[] = [];
  tagsArr: any;
  constructor(fb: FormBuilder,private userService:UserService,private initiative:InitiativeService) {
    this.volForm = fb.group({
      requirement:this.requirement
    });
   }

  ngOnInit(): void {
    this.sessionVars = sessionStorage;
    
    
    this.initiative.fetchMyInitiatives({userId:this.sessionVars['user']}).subscribe(
      data=>{console.log(data)
      // this.orgData=data;
      for(let i of data){
        this.details=[...this.details,i.description]
        this.HashTags=[...this.HashTags,...i.crisis.tags]
      }
      console.log(this.HashTags)
      }
    )
    this.tagsArr=JSON.parse(this.sessionVars['tags']);
    
    // this.userService.updateTags({email:this.sessionVars['user'],tags:tagsArr}).subscribe(
    //   data=>console.log(data)
    // )
    // {email:"as",tags:["adv"]}
   
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tagsArr.push(value);

    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(val: any): void {
    const index = this.tagsArr.indexOf(val);

    if (index >= 0) {
      this.tagsArr.splice(index, 1);
    }
  }
  submit(){
    if(this.volForm.valid){
     console.log(this.volForm);
     this.userService.updateTags(this.volForm.value).subscribe( res => {
       console.log(res);
     })
    }
 }

}
