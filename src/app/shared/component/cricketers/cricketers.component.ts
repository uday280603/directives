import { Component, Input, OnInit } from '@angular/core';
import { Icricketers } from '../../models/cricketers';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

  @Input() cricketerObj !: Icricketers;

  constructor() { }

  ngOnInit(): void {
  }

}
