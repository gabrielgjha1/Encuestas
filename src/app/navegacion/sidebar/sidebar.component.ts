import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { SidebarService } from 'src/app/servicios/nombres/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Sidebar:any[]=[];

  constructor(public _usuarioService:UsuariosService,
              public _SidebarService:SidebarService) { }

  ngOnInit(): void {
    this.TraerUsuario();
  }

  TraerUsuario(){
    this._SidebarService.TraerSidebar().subscribe((resp:any)=>{
     
      this.EvaluarRol(resp.sidebar)

    });

  }

  EvaluarRol(sidebar:any){
    sidebar.forEach(element => {

        if (this._usuarioService.rol==='rol_admin'){
          this.Sidebar.push(element);
          return
        }
   
        if (this._usuarioService.rol ===  element.rol ){
         
          this.Sidebar.push(element);
          return

            }
          
      });

  }


}
