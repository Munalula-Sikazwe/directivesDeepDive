import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private temRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }
 @Input() set appUnless(condition:boolean){
    if(!condition){
this.viewContainer.createEmbeddedView(this.temRef);
    }else{
this.viewContainer.clear()
    }

  }
}
