import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarGuard implements CanActivate {
  constructor(public _usuarioService:UsuariosService,
              public router:Router){}
  canActivate(){

    if (this._usuarioService.rol==='rol_usuario'){
      this._usuarioService.logout();
      this.router.navigate(['/login'])
      return false
    }

    return true
  }
}
