import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(fb: FormBuilder,private userService:UserService) {
    this.volForm = fb.group({
      requirement:this.requirement
    });
   }

  ngOnInit(): void {
    this.sessionVars = sessionStorage;
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
