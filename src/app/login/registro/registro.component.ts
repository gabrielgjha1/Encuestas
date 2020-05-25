import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import Swal from'sweetalert2';
import { Usuario } from 'src/app/modelos/usuarios.models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;
  
  constructor(public _builder:FormBuilder,public _usuarioService:UsuariosService,public router:Router) { 

    this.formulario = this._builder.group({

      nombre:['',Validators.required],
      usuario:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      chek:['',[Validators.required]]

    })

  }

  ngOnInit(): void {
  }


  Registro(formulario){
    Swal.fire({
      title: 'Seguro que quiere registrarse?',
      text: "Su cuenta sera como usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'
    }).then((result) => {

      if (result.value) {
        Swal.fire(
          'Cuenta creada!',
          
          'success'
        )
        
        let usuarios = new Usuario(
          this.formulario.value.nombre,
          this.formulario.value.email,
          this.formulario.value.usuario,
          this.formulario.value.password    
               
        );

        this._usuarioService.RegistrarUsuario(usuarios).subscribe((resp:any)=>{
          this.router.navigate(['/login']);
          console.log(resp)

        })

      }
    })

  }


}
