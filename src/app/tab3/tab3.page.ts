import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab3Page {
  base: string = null
  altura:string = null
  resultado:string
  mensagem:string

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
  calcular(){
    var base = parseFloat(this.base)
    var altura = parseFloat(this.altura)

    if(this.base != null && this.altura != null){
        var r = (base * altura) / 2
        this.resultado = r.toFixed(2)
      }
      else{
        this.mensagem = 'Campo não preenchido'
        this.presentAlert()
        this.mensagem = ''
      }
    }
  }
