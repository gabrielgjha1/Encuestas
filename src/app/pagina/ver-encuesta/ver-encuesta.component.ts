import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Encuestas } from 'src/app/modelos/encuestas.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-encuesta',
  templateUrl: './ver-encuesta.component.html',
  styleUrls: ['./ver-encuesta.component.css']
})
export class VerEncuestaComponent implements OnInit {

  titulo:string="";
  campos:string[]=[];
  id:string="";
  campo:string;
  comprobar:boolean=false;

  constructor(public _EncuestaService:EncuestasService) { }

  ngOnInit(): void {
  this.traerEncuesta()
  }

  // trae la encuesta generada por el administrador
  traerEncuesta(){


    this._EncuestaService.TraerDatos().subscribe((resp:any)=>{
      // verifica si hay alguna encuesta o no 

      if(resp.genEncuesta.length!=0){
        this.comprobar=true;
        this.titulo=resp.genEncuesta[0].titulo;
        this.campos=resp.genEncuesta[0].campo;
        this.id=resp.genEncuesta[0]._id;

      }     
     
    })  



  }


  formulario(f){
   
    let encueta = new Encuestas(null,null,this.campo,this.id)

    this._EncuestaService.GuardadoDatosUsuario(encueta).subscribe(resp=>{
      Swal.fire(
        'Ya voto!',
        'Buen trabajo!',
        'success'
      )
      this.comprobar=false;
    })

}
}
