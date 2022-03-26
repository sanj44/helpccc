import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  hide = true;
  email = new FormControl(null,[Validators.required, Validators.email]);
  password = new FormControl(null,[Validators.required]);
  loading: boolean=false;
  
  constructor(fb: FormBuilder,private router:Router) {
    this.loginForm = fb.group({
      email:this.email,
      password: this.password,
    });
    
   }
   success(){
    this.loading=false;
   }
   submit(){
     this.loading=true;
     if(this.loginForm.valid){
      console.log(this.loginForm);
      sessionStorage["logInStatus"]=true;
      setTimeout(() => {
        this.loading=false;
        this.router.navigate([""])
      }, 1500);
     }
     else{
     this.loading=false;

     }
    
    
    
  }
  reset(){
    this.loginForm.reset();
  }
  ngOnInit(): void {
  }

}
