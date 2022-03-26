import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-initiative',
  templateUrl: './create-initiative.component.html',
  styleUrls: ['./create-initiative.component.css']
})

export class CreateInitiativeComponent implements OnInit {

  regform: FormGroup;
  name = new FormControl(null,[Validators.required]);
  crisisId =new FormControl(null,[Validators.required]);
  crisisName =new FormControl(null,[Validators.required]);
  crisisTag =new FormControl(null,[Validators.required]);
  crisisDetails =new FormControl(null,[Validators.required]);
  volunteersRequired = new FormControl(null,[Validators.required]);
  description = new FormControl(null,[Validators.required]);
  signedUpVlunteers = new FormControl(null,[Validators.required]);
  panelOpenState = false;
  HashTags:String[]= [];
  crisisHashTags:String[]= [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(fb: FormBuilder) { 
    this.regform = fb.group({
      name:this.name,
      crisisId    :this.crisisId,
      crisisName  :this.crisisName,
      crisisDetails:this.crisisDetails,
      volunteersRequired:this.volunteersRequired,
      description:this.description,
      signedUpVlunteers:this.signedUpVlunteers
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
  submit(){
    let {crisisId,crisisName,crisisDetails}=this.regform.value;
    let {name,volunteersRequired,
      description,
      signedUpVlunteers}=this.regform.value
    let crisis={id:crisisId,name:crisisName,deatils:crisisDetails,tags:this.crisisHashTags};
    let data={name,volunteersRequired,description,signedUpVlunteers,crisis,tags:this.HashTags};
    console.log(data);
    
  }
  reset(){
    this.regform.reset();
  }
  ngOnInit(): void {
  }

}
