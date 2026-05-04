import { Component, OnInit } from '@angular/core';
import { Ibike } from '../../models/bike';
import { bikeData } from '../../const/bikeData';

@Component({
  selector: 'app-bike-dashboard',
  templateUrl: './bike-dashboard.component.html',
  styleUrls: ['./bike-dashboard.component.scss']
})
export class BikeDashboardComponent implements OnInit {

  bikeArr : Ibike[]=[];

  constructor() { }

  ngOnInit(): void {
    this.bikeArr = bikeData;
  }

  trackByFun(index : number, bike : Ibike){
    return bike.id;
  }

}
