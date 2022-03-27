import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  
  constructor(fb: FormBuilder,private router:Router, private userService: UserService) {
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
      this.userService.login(this.loginForm.value).subscribe( res => {
        console.log(res);
        sessionStorage["logInStatus"]=true;
        sessionStorage["user"] = res.email;
        sessionStorage["username"] = res.fullName;
        sessionStorage["userType"] = res.userType;
        sessionStorage["tags"] = JSON.stringify(res.tags);
        
        this.loading=false;
        this.router.navigate([""])
      })
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

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
