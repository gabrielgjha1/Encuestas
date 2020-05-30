import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Encuestas } from 'src/app/modelos/encuestas.models';

@Component({
  selector: 'app-vergraficas',
  templateUrl: './vergraficas.component.html',
  styleUrls: ['./vergraficas.component.css']
})
export class VergraficasComponent implements OnInit {

  data:string[]=[];
  campos:string[]=[];
  datas:number[]=[];
  usuarios:Encuestas[]=[];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(public _EcuestaService:EncuestasService) { }


  ngOnInit(): void {
  
    this.TraerGrafica()
  }


  //traer Informacion de los participantes
 

  TraerGrafica(){
  
    this._EcuestaService.TraerDatosUsuario().subscribe((resp:any)=>{
      
     if(resp.datosEncuesta.length !=0){

       this.MostrarEnGrafico(resp)
       this.usuarios=resp.datosEncuesta;

     }

      

    });
  
    
    
  }
  
  MostrarEnGrafico(resp){
    // guarda los labels en un arreglo 
        resp.datosEncuesta[0].encuesta.campo.map((elementos) => { 
          this.campos.push(elementos);
      
        })
      // aqui estan los campos
        //console.log(this.campos)
        
      //guarda los datos
        resp.datosEncuesta.map((elementos) => { 
          this.data.push(elementos.data);
      
        })
      // aqui estan los datos
       // console.log(this.data);
      
       let contador = 0;

      this.campos.forEach(campos => {
        contador=0
      this.data.forEach(datos => {

        if (datos===campos){

          contador++;

        }

      });
      
      this.datas.push(contador);

  });    

    
  }


  

  

}
