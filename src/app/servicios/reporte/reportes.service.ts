import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from 'src/app/modelos/reporte.models';
import { URLs } from 'src/app/config/url';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from '../usuarios/usuarios.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';


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
    return this.http.post(url,reporte).catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error al Crear el reporte',
        text: err.error.mensaje,
        footer: 'Consultar con el administrador o intentar de nuevo?'
      })

        return Observable.throw(err);
    });


   }

   EliminarDatos(id:string){
     
    let url=URLs+'reporte/'+id;
     url= url+'?token='+this._UsuarioService.token
    console.log(url)
    return this.http.delete(url).catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar usuario',
        text: err.error.mensaje,
        footer: 'Consultar con el administrador o intentar de nuevo?'
      })

        return Observable.throw(err);
    });


   }

}
