import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
