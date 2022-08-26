import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {
  A: string
  B: string
  C: string
  mensagem: string
  imagem: any = "assets/icon/favicon.png"
  

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
  verificar(){
    var a = parseInt(this.A)
    var b = parseInt(this.B)
    var c = parseInt(this.C)

    if(a != null && b != null && c != null){
      if(a + b > c && a + c > b && b + c > a){
        if(a == b && a == c){
          this.mensagem = 'Triângulo Equilátero'
          this.imagem = "assets/icon/tri_equi.png"
          }
          else if(a != b && a != c){
            this.mensagem= 'Triângulo Escaleno'
            this.imagem = 'assets/icon/tri_esca.png'
          }
          else{
            this.mensagem = 'Triângulo Isósceles'
            this.imagem = 'assets/icon/tri_iso.png'
  
          }
      }
      else{
        this.mensagem = 'Triângulo não existe ou campo não preenchido'
        this.presentAlert()
        this.imagem = "assets/icon/favicon.png"
        this.mensagem = ''
    }
    }
  }

}
