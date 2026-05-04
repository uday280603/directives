import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowerCase]',
})
export class LowerCaseDirective {
  constructor(
    private _eleRef: ElementRef,
    private _render: Renderer2,
  ) {}

  // @HostListener('keyup')
  // onSerch() {
  //   let val = (this._eleRef.nativeElement.value as string).toLowerCase();
  //   console.log(val);
  //   this._eleRef.nativeElement.value = val
    
  // }

    @HostListener('keyup',['$event'])
  onSerch(eve :Event) {

    let inputControl = (eve.target as HTMLInputElement);
    let value = inputControl.value.toLowerCase()
    inputControl.value = value;
 
    
    
  }
}
