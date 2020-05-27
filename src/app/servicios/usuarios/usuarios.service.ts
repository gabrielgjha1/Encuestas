import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/modelos/usuarios.models';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import { URLs } from 'src/app/config/url';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token:String;
  usuario:Usuario;
  rol:String;
  id:String;
  constructor( public http:HttpClient) { this.CargarStore() }


  RegistrarUsuario(usuarios:Usuario){

    let url =URLs+'usuario'; 
    return this.http.post (url,usuarios).catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesion',
        text: err.error.mensaje,
        footer: 'Why do I have this issue?'
      })

        return Observable.throw(err);
    });


  }

  login(usuario:Usuario){
    let url =URLs+'login';
    return this.http.post(url,usuario).map((resp:any)=>{
      console.log(resp);
      console.log(resp.usuario);
      this.GuardarStore(resp.token,resp.usuario.rol,resp.usuario,resp.usuario._id)
    

    }).catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesion',
        text: err.error.mensaje,
        footer: 'Why do I have this issue?'
      })

        return Observable.throw(err);
    });
    
  }
  
  
  logout(){
  
    this.token="";
    this.usuario=null;
    this.rol="";
    this.id="";

    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
    
    
  }


  Estalogeado(){
    if (this.token.length>5){
      return true;
    }
    else {
      return false;
    }

  }

  CargarStore(){
    if (localStorage.getItem('token')){
      
     this.token=localStorage.getItem('token');
     this.rol = localStorage.getItem('rol');
     this.usuario = JSON.parse(localStorage.getItem('usuario'));
     this.id = localStorage.getItem('id');

    }
    else{
      this.token="";
      this.rol="";
      this.usuario=null;
      this.id="";
    }
    
  }

  GuardarStore(token:string,rol:string,usuario:any,id:string){
   
      localStorage.setItem('token',token);
      localStorage.setItem('rol',rol);
      localStorage.setItem('id',id)
      localStorage.setItem('usuario', JSON.stringify(usuario));
    
      this.token = token;
      this.rol = rol;
      this.usuario = usuario;
      this.id=id;

    }


}
