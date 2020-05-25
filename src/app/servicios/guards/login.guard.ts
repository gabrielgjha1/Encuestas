import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(public _usuarioService:UsuariosService,public router:Router){}
  canActivate(){
   

    if (this._usuarioService.Estalogeado()){
      return true 
    }
    else {
      this.router.navigate(['/login'])
      return false 
    }


  }
     
}
