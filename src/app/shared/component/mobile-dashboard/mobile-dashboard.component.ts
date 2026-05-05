import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';
import { movieData } from '../../const/movieData';
import { mobileData } from '../../const/mobileData';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileArr :Imobile[] = [];

  constructor() { }

  ngOnInit(): void {

    this.mobileArr = mobileData;
  }

}
