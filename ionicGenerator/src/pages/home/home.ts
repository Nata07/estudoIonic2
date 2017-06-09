import { DynamicPage } from './../dynamic/dynamic';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pushPage(): void{
  this.navCtrl.push(DynamicPage);
  }
}
