import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicCss]',
})
export class cssHighLighterDirective implements OnInit {
  constructor(private _eleRef: ElementRef) {
    // console.log(_eleRef);
    _eleRef.nativeElement.style.backgroundColor = 'orange';
  }

  ngOnInit(): void {}
}
