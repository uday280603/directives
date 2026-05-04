import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-card-component',
  templateUrl: './post-card-component.component.html',
  styleUrls: ['./post-card-component.component.scss']
})
export class PostCardComponentComponent implements OnInit {

  @Input()  postObj !: Ipost; 

  constructor() { }

  ngOnInit(): void {
  }

}
