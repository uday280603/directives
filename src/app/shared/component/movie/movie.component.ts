import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/Imovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  @Input() movieObj !:Imovie;

  constructor() { }

  ngOnInit(): void {
  }

}
