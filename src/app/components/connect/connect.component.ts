import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Subject {
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  regform: FormGroup;
  firstName = new FormControl(null,[Validators.required]);
  lastName = new FormControl(null,[Validators.required]);
  company = new FormControl(null,[Validators.required]);
  phone = new FormControl(null,[Validators.required]);
  subject = new FormControl(null,[Validators.required]);
  firstTimeOption = new FormControl(null,[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subjects:Subject[] = [
    {value: 'subject-0', viewValue: 'Subject 1'},
    {value: 'subject-1', viewValue: 'Subject 2'},
    {value: 'subject-2', viewValue: 'Subject 3'},
  ];
  constructor(fb: FormBuilder) { 
    this.regform = fb.group({
      firstName:this.firstName,
      LastName: this.lastName,
      company:this.company,
      email:this.email,
      phone:this.phone,
      subject:this.subject,
      firstTimeOption:this.firstTimeOption
    });
  }
  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  submit(){
    console.log(this.regform);
    
  }
  reset(){
    this.regform.reset();
  }
  ngOnInit(): void {
  }

}
