import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Usuario } from 'src/app/modelos/usuarios.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup
  constructor(public _builder:FormBuilder,public _usuarioService:UsuariosService,
              public router:Router) { 

    this.formulario = _builder.group({

      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],

    });

  }

  ngOnInit(): void {
  }

  Login(formulario){
    console.log(formulario)
    let usuario = new Usuario(
      null,
      formulario.value.email,
      null,
      formulario.value.password
    );
      
      this._usuarioService.login(usuario).subscribe(resp=>{
        this.router.navigate(['/reporte']);
        
      });

  }

}
