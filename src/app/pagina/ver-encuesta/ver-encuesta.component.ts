import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';

@Component({
  selector: 'app-ver-encuesta',
  templateUrl: './ver-encuesta.component.html',
  styleUrls: ['./ver-encuesta.component.css']
})
export class VerEncuestaComponent implements OnInit {

  titulo:string="";
  campos:string[]=[];

  constructor(public _EncuestaService:EncuestasService) { }

  ngOnInit(): void {
  this.traerEncuesta()
  }

  traerEncuesta(){

    this._EncuestaService.TraerDatos().subscribe((resp:any)=>{
      this.titulo=resp.genEncuesta[0].titulo;
      this.campos=resp.genEncuesta[0].campo;
      console.log(this.campos)
    })  

  }

  formulario(f){
    console.log(f)
  }

}
