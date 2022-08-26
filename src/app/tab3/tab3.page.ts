import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss','../explore-container/explore-container.component.scss']
})
export class Tab3Page {
  base: string
  altura:string
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
    var base = parseInt(this.base)
    var altura = parseInt(this.altura)

    if(base != null && altura != null){
        var r = (base * altura) / 2
        this.mensagem = 'A área do triângulo é:'
        this.resultado = r.toFixed(2)
      }
    }
  }
