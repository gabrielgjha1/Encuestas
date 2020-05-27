import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from 'src/app/modelos/reporte.models';
import { URLs } from 'src/app/config/url';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(public http:HttpClient,public _UsuarioService:UsuariosService) {



   }

   TraerReportes(){

    let url=URLs+'reporte';

    return this.http.get(url);
    

   }

   GuardarDAtos(reporte:Reporte){

    let url=URLs+'reporte?token='+this._UsuarioService.token;
    return this.http.post(url,reporte);


   }

}
