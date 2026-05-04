import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   @Input() userObj !: Iuser;

  constructor() { }

  ngOnInit(): void {
  }

}
