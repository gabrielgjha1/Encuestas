import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _usuarioService:UsuariosService) { }

  ngOnInit(): void {
  
  }
  
}
