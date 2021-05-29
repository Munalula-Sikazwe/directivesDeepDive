import {Input,Directive, Renderer2, OnInit, ElementRef, HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultColor:string = 'transparent';
@Input() highlightColor:string = 'red';

  constructor( private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit() {
this.backgroundColor = this.defaultColor;
  }
@HostBinding('style.backgroundColor') backgroundColor:string= this.defaultColor;
@HostListener('mouseenter') mousein(event: Event){
    this.backgroundColor = this.highlightColor;
}
@HostListener('mouseleave') mouseout(event: Event){
    this.backgroundColor = this.defaultColor;
}
}
