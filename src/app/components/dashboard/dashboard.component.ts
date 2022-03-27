import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sessionVars: any;

  constructor() { }

  ngOnInit(): void {
    this.sessionVars = sessionStorage;
  }

}
