import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatChipInputEvent} from '@angular/material/chips';
import { InitiativeService } from 'src/app/services/initiative.service';

interface Subject {
  value: string;
  viewValue: string;
} 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm1: FormGroup ;
  loginForm2: FormGroup ;
  subject0: FormGroup ;
  subject1: FormGroup ;
  subject2: FormGroup ;
  loading: boolean=false;

  hide = true;
  email = new FormControl(null,[Validators.required, Validators.email]);
  password = new FormControl(null,[Validators.required]);
  fullName = new FormControl(null,[Validators.required]);
  phone = new FormControl(null,[Validators.required]);
  subject = new FormControl(null,[Validators.required]);
  initativeCreate = new FormControl(null,[Validators.required]);
  volInitative = new FormControl(null,[Validators.required]);
  Htags = new FormControl(null,[Validators.required]);
  IwantTo = new FormControl(false);
  gender1= new FormControl(null);
  dob1= new FormControl(null);
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  HashTags:string[]= [];

  subjects:Subject[] = [
    {value: 'subject0', viewValue: 'Organisation'},
    {value: 'subject1', viewValue: 'Volunteer'},
    {value: 'subject2', viewValue: 'Beneficiary'},
  ];
  initative=[
    {value: 'Init1', viewValue: 'PS-Covid 19'},
    {value: 'Init2', viewValue: 'PS-Ukrain Crisis'},
  ];
  isLinear = false;
  initSubmitVal!: string;
  
  constructor(fb: FormBuilder,private router:Router, private initiativeService: InitiativeService) {
    this.loginForm1 = fb.group({
      email:this.email,
      password: this.password,
      fullName:this.fullName,
      phone:this.phone
    });
    this.loginForm2 = fb.group({
      subject:this.subject
    });
    this.subject0 = fb.group({
      initativeCreate:this.initativeCreate
    });
    this.subject1 = fb.group({
      volInitative:this.volInitative,
      gender:this.gender1,
      dob:this.dob1
    });
    this.subject2 = fb.group({
      IwantTo:this.IwantTo,
      // Htags:this.Htags,
    });
    
   }
   add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.HashTags.push(value);
      
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(val: any): void {
    const index = this.HashTags.indexOf(val);

    if (index >= 0) {
      this.HashTags.splice(index, 1);
    }
  }
   getSubjectValue(sub:any){
    for(let i of this.subjects){
      if(i.value==sub)
      //this.initSubmitVal=i.viewValue
      return i.viewValue
    }
    return ""
   }
   getErrorMessage() {
    

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.initiativeService.getAllCrisis().subscribe( res => {
      console.log(res);
    })
  }
  submit(){
    this.loading = true;
    console.log(this.getSubjectValue(this.loginForm2.value["subject"]))
    this.initSubmitVal=this.getSubjectValue(this.loginForm2.value["subject"])
    if(this.initSubmitVal=="Beneficiary"){
     console.log({...this.loginForm1.value,...this.loginForm2.value,...this.subject2.value,hashTags:this.HashTags});
    }
    else if(this.initSubmitVal=="Volunteer"){
      console.log({...this.loginForm1.value,...this.loginForm2.value,...this.subject1.value});
     }
     else if(this.initSubmitVal=="Organisation"){
      console.log({...this.loginForm1.value,...this.loginForm2.value,...this.subject0.value});
     }
     sessionStorage["logInStatus"]=true;
     setTimeout(() => {
      this.loading=false;
      if(this.initSubmitVal=="Organisation"){
      this.router.navigate(["CreateInitiative"])
      }
      else{
      this.router.navigate(["login"])
      }
    }, 1500);

   
 }
 reset(){
   this.loginForm1.reset();
 }

}
