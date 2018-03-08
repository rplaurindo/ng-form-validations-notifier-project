import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Conditional } from '@angular/compiler';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngElse]'
})
export class StructuralDirectiveDirective {

  @Input() set ngElse(conditional: Boolean) {
    if (!conditional) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>,
  private _viewContainerRef: ViewContainerRef) { }

}
