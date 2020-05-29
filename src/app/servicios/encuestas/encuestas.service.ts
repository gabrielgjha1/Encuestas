import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Encuestas } from 'src/app/modelos/encuestas.models';
import { UsuariosService } from '../usuarios/usuarios.service';
import { URLs } from 'src/app/config/url';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  constructor(public http:HttpClient,public _usuarioService:UsuariosService) { }


  //guarda la encuesta que el administrador genero
  GuardarDatos(encuesta:Encuestas){
    var url = URLs+'genEncuesta?token='+this._usuarioService.token;

    return this.http.post(url,encuesta);

  }
  //trae la encuesta del administrador a los usuarios
  TraerDatos(){
    var url = URLs+'genEncuesta';

    return this.http.get(url);


  }
  //elimina la encuesta del administrador
  Eliminar(id:string){
    var url = URLs+'genEncuesta/'+id;
    return this.http.delete(url);
  }

  //Datos de la encuestas hechas por los usuarios
  GuardadoDatosUsuario(encuesta:Encuestas){
    var url = URLs+'datosEncuesta?token='+this._usuarioService.token;

    return this.http.post(url,encuesta);


  }

  //Datos de la encuestas hechas por los usuarios
  TraerDatosUsuario(){
    var url = URLs+'datosEncuesta';

    return this.http.get(url)

  }

  //Eliminar Datos de la encuestas hechas por los usuarios

  ELiminarDatosUsuario(){
    var url = URLs+'datosEncuesta';

    return this.http.delete(url);
  }

}
