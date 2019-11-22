import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BuscadorProvider } from '../../providers/buscador/buscador';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _hs:BuscadorProvider ) {
  }
   buscar_huesped(ev:any)
  {
    let valor = ev.target.value;
    console.log(valor);

    this._hs.buscar_huesped1(valor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');

  }

}
