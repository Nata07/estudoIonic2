
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  lifecycle(): void{ 
    this.navCtrl.push(LifecycleEventsPage)
    .then((authorizedAccess: boolean) => {
         
        if(authorizedAccess) {        
          console.log('Page pushed!');
        } else {
          console.log('Acesso não autorizado!');
        }
      
      }).catch(error => {
        console.log('Mensagem se houver erro.', error);        
      });
  }

}
