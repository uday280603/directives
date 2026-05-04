import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[advancecss]',
})
export class cssHighLighterWithRenderDirective implements OnInit {
  constructor(
    private _eleRef: ElementRef,
    private _render: Renderer2,
  ) {}
  ngOnInit(): void {
    // this._render.setStyle(
    //   this._eleRef.nativeElement,
    //   'background-color',
    //   'red',
    // );

    // this._render.addClass(this._eleRef.nativeElement,'alert-info')

  }

  @HostListener('mouseover')
  onMouseHover(){
    console.log('Mouse Hover')
    this._render.setStyle(this._eleRef.nativeElement,'background-color','#000');
  }

    @HostListener('mouseout')
  onMouseOutHover(){
        this._render.setStyle(this._eleRef.nativeElement,'background-color','transparent');
  }
  
}
