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


  GuardarDatos(encuesta:Encuestas){
    var url = URLs+'genEncuesta?token='+this._usuarioService.token;

    return this.http.post(url,encuesta);

  }

  TraerDatos(){
    var url = URLs+'genEncuesta';

    return this.http.get(url);


  }

  Eliminar(id:string){
    var url = URLs+'genEncuesta/'+id;
    return this.http.delete(url);
  }

}
