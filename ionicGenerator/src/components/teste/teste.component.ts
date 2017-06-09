import { Component } from '@angular/core';

/**
 * Generated class for the Teste component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'teste',
  templateUrl: 'teste.component.html'
})
export class TesteComponent {

  text: string;

  constructor() {
    console.log('Hello Teste Component');
    this.text = 'Hello World';
  }

}
