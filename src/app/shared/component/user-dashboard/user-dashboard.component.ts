import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/user';
import { userData } from '../../const/userData';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  userArr:Iuser[] = [];

  constructor() { }

  ngOnInit(): void {
    this.userArr = userData
  }

  trackByFun(index:number , user : Iuser){
    return user.userId;

  }

}
