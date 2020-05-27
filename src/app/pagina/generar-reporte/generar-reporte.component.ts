import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reporte/reportes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reporte } from 'src/app/modelos/reporte.models';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.component.html',
  styleUrls: ['./generar-reporte.component.css']
})
export class GenerarReporteComponent implements OnInit {

  formulario:FormGroup;

  constructor(public _reporteServise:ReportesService,public _builder:FormBuilder,
              public _usuarioService:UsuariosService) { }

  ngOnInit(): void {

    this.formulario =  this._builder.group({

    fecha:[''],
    dineroGas:['',Validators.required],
    dineroGan:['',Validators.required],
    sucursal:['',Validators.required]

    });

  }


  GuardarDatos(formulario){

    let reportes = new Reporte(
      formulario.dineroGas,
      formulario.dineroGan,
      formulario.sucursal,
      this._usuarioService.id,
      formulario.fecha,

    );

    this._reporteServise.GuardarDAtos(reportes).subscribe(resp=>{
      Swal.fire(
        'Buen trabajo, reporte registrado!',
        'Continuar!',
        'success'
      )
    });



    
  }


}
