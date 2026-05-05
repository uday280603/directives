import { Component, OnInit } from '@angular/core';
import { Icricketers } from '../../models/cricketers';
import { cricketerData } from '../../const/cricketerData';

@Component({
  selector: 'app-cricketers-dashboard',
  templateUrl: './cricketers-dashboard.component.html',
  styleUrls: ['./cricketers-dashboard.component.scss']
})
export class CricketersDashboardComponent implements OnInit {

  cricketersArr!:Icricketers[];

  constructor() { }

  ngOnInit(): void {
    this.cricketersArr = cricketerData
  }

}
