import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[background-green]' // Attribute selector
})
export class BackgroundGreenDirective {

  constructor( public element: ElementRef) {

    element.nativeElement.style.backgroundColor = 'green';
    console.log('Hello BackgroundGreen Directive');
  }

}
