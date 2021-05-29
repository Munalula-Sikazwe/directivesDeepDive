import {Directive, Renderer2, OnInit, ElementRef, HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor( private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit() {

  }
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
@HostListener('mouseenter') mousein(event: Event){
    this.backgroundColor = 'red';
}
@HostListener('mouseleave') mouseout(event: Event){
    this.backgroundColor = 'transparent';
}
}
