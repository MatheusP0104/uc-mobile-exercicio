import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab2Page {
  A: string
  B: string
  C: string
  mensagem: string
  resultado: string
  

  constructor(private alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Algo deu errado!',
      message: this.mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
  calc(){
    var a = parseInt(this.A)
    var b = parseInt(this.B)
    var c = parseInt(this.C)
    var p = (a + b + c) / 2
    var r = Math.sqrt(p*(p-a)*(p-b)*(p-c))

    if(a != null && b != null && c != null){
      if(a + b > c && a + c > b && b + c > a){
        this.mensagem = 'A área do triângulo é:'
        this.resultado = r.toFixed(2)
      }
      else{
        this.mensagem = 'Triângulo não existe ou campo não preenchido'
        this.presentAlert()
        this.mensagem = ''
        this.resultado = ''
    }
    }
  }

}
