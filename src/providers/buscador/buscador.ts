import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BuscadorProvider {

  resultados:any[]=[];

  constructor(private http:HttpClient) {
    console.log('Hello BuscadorProvider Provider');
  }
  buscar_huesped1(termino:string )
{
  let url = URL_SERVICIOS + "/prueba/obtener_huesped/" + termino;

   this.http.get( url )
      .subscribe( (resp:any)  =>{

        console.log(resp);

        var data = JSON.parse(JSON.stringify(resp));

        this.resultados=data.nombre;

      } )

}

}

