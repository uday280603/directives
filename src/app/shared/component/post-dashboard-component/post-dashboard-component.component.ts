import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postData } from '../../const/postData';

@Component({
  selector: 'app-post-dashboard-component',
  templateUrl: './post-dashboard-component.component.html',
  styleUrls: ['./post-dashboard-component.component.scss']
})
export class PostDashboardComponentComponent implements OnInit {

  postArr :Ipost[] =[];

  constructor() { }

  ngOnInit(): void {
    this.postArr = postData
  }

}
