import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscadorProvider } from '../../providers/buscador/buscador';
import { HuespedPage } from '../../pages/huesped/huesped';


@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  huespedPage = HuespedPage;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _hs:BuscadorProvider ) {

  }
  resultado:any=[];
   buscar_huesped(ev:any)
  {
    let valor = ev.target.value;
    console.log(valor);

    //this._hs.buscar_huesped1(valor);
    //console.log('valor:', this._hs.buscar_huesped1(valor));

    this._hs.buscar_huesped1(valor)
    .subscribe( (data:any) => {
        this.resultado = data
        console.log(data)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }
}
