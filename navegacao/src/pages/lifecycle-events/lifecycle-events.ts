import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEvents page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // aguarda entrada da pagina 
  ionViewCanEnter(): Promise<any>{
    /*console.log('01 ionViewCanEnter called');
    return true;*/

    return new Promise((resolve, reject) => {
        console.log('aguardando 2 segundos...');
        setTimeout(() => {
          let number = Math.round(Math.random() * 100);
          if (number % 2 == 0){
            resolve();
            console.log(`${number} - Autorizado`);
          }else{
            reject();
            console.log(`${number} - Nao autorizado`);
            }
        }, 2000);
    });
  }

  // Carregando pagina em cache mas ainda nao foi exibida
  ionViewDidLoad() {
    console.log(' 02 ionViewDidLoad CALLED');
  }

  // Assim que a pagina esta pra entrar mas nao entra
  ionViewWillEnter() {
    console.log('03 ionViewWillEnter called');
  }

  // quando a pagina esta exibida
  ionViewDidEnter() {
    console.log('04 ionViewDidEnter called')
  }

  //Verifica se pode sair da pagina 
  ionViewCanLeave(): boolean{
    console.log('05 ionViewCanLeave called');
    return false;
  }

  // quando a pagina esta prestes a sair 
  ionViewWillLeave() {
    console.log('06 ionViewWillLeave called')
  }

  // quando sai da pagina completamente 
  ionViewDidLeave() {
    console.log('07 ionViewDidLeave called')
  }

  // quando a pagina esta prestes a ser destruida junto com os elementos
  ionViewWillUnload() {
    console.log('08 ionViewWillunload called')
  }

  onPop(): void{
    this.navCtrl.pop()
    .then((authorizedAccess: boolean) => {
         
        if(authorizedAccess) {        
          console.log('Page pushed!');
        } else {
          console.log('Não é possivel sair da pagina!');
        }
      
      }).catch(error => {
        console.log('Mensagem se houver erro.', error);        
      });
    
  }
}
