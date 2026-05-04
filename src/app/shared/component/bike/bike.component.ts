import { Component, Input, OnInit } from '@angular/core';
import { Ibike } from '../../models/bike';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {

   @Input() bikeObj !: Ibike;

  constructor() { }

  ngOnInit(): void {
  }

}
