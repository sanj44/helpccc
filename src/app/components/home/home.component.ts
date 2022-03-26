import { Component, OnInit } from '@angular/core';
import { Initiative } from 'src/app/models/initiative';
import { InitiativeService } from 'src/app/services/initiative.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  initiatives:Initiative[] = [];
  constructor(private initiativeService: InitiativeService) { }

  ngOnInit(): void {
    this.initiativeService.fetchAllInitiatives().subscribe( res => {
      console.log(res);      
      this.initiatives = res;
    });
  }

}
