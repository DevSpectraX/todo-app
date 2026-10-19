// Las directivas modifican la apariencia, la estructura o el comportamiento de los elementos


import { Directive, ElementRef, afterNextRender, inject } from "@angular/core";

@Directive({selector: '[appAutofocus]'})

export class AutofocusDirective {
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

    constructor(){
        afterNextRender(() => this.host.nativeElement.focus());
    }

}