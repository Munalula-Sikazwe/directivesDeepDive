import {Directive, Renderer2, OnInit, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor( private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit() {

  }
@HostListener('mouseenter') mousein(event: Event){
     this.renderer.setStyle(this.elref.nativeElement,'background-color','red')
}
@HostListener('mouseleave') mouseout(event: Event){
     this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent')
}
}
