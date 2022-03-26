import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Crisis } from 'src/app/models/initiative';
import { InitiativeService } from 'src/app/services/initiative.service';

@Component({
  selector: 'app-create-initiative',
  templateUrl: './create-initiative.component.html',
  styleUrls: ['./create-initiative.component.css']
})

export class CreateInitiativeComponent implements OnInit {

  regform: FormGroup;
  crisises: Crisis[];
  name = new FormControl(null,[Validators.required]);
  crisis =new FormControl(null,[Validators.required]);
  volunteersRequired = new FormControl(null,[Validators.required]);
  description = new FormControl(null,[Validators.required]);
  signedUpVlunteers = new FormControl(null,[Validators.required]);
  panelOpenState = false;
  HashTags:String[]= [];
  crisisHashTags:String[]= [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(fb: FormBuilder, private initiativeService: InitiativeService, private router: Router) { 
    this.regform = fb.group({
      name:this.name,
      // crisisId    :this.crisisId,
      // crisisName  :this.crisisName,
      // crisisDetails:this.crisisDetails,
      volunteersRequired:this.volunteersRequired,
      description:this.description,
    });
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.HashTags.push(value);
    }
    event.chipInput!.clear();
  }
  addForCrisis(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.crisisHashTags.push(value);
    }
    event.chipInput!.clear();
  }
  removeForCrisis(val:any): void {
    const index = this.crisisHashTags.indexOf(val);

    if (index >= 0) {
      this.crisisHashTags.splice(index, 1);
    }
  }
  remove(val: any): void {
    const index = this.HashTags.indexOf(val);

    if (index >= 0) {
      this.HashTags.splice(index, 1);
    }
  }

  getCrisisById(id: string): Crisis {
    for(let crisis of this.crisises){
      if(crisis._id === id) {
        return crisis;
      }
    }
    return this.crisises[0];
  }
   submit(){
    let {name,volunteersRequired,
      description,
      signedUpVlunteers}=this.regform.value
    let crisis=this.getCrisisById(this.crisis.value);
    let data={name,volunteersRequired,description,signedUpVlunteers,crisis,tags:this.HashTags, userId: sessionStorage["user"]};
    console.log(data);
    this.initiativeService.createInitiative(data).subscribe( res => {
      console.log(res);
      this.router.navigate([""])
    })    
  }
  reset(){
    this.regform.reset();
  }
  ngOnInit(): void {
    this.initiativeService.getAllCrisis().subscribe( res => {
      console.log(res);
      this.crisises = res;
    })
  }

}
