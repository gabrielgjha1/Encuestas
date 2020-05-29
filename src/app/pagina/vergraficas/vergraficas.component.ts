import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-vergraficas',
  templateUrl: './vergraficas.component.html',
  styleUrls: ['./vergraficas.component.css']
})
export class VergraficasComponent implements OnInit {

  data:string[]=[];
  campos:string[]=[];
  datas:number[]=[];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(public _EcuestaService:EncuestasService) { }


  ngOnInit(): void {
  
    this.TraerGrafica()
  }


  TraerGrafica(){
  
    this._EcuestaService.TraerDatosUsuario().subscribe((resp:any)=>{
  
      this.MostrarEnGrafico(resp)
      

    });
  
    
    
  }
  
  MostrarEnGrafico(resp){
    // guarda los labels en un arreglo 
        resp.datosEncuesta[0].encuesta.campo.map((elementos) => { 
          this.campos.push(elementos);
      
        })
      // aqui estan los campos
        console.log(this.campos)
        
      //guarda los datos
        resp.datosEncuesta.map((elementos) => { 
          this.data.push(elementos.data);
      
        })
      // aqui estan los datos
        console.log(this.data);
      
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

  console.log(this.datas)

    
  }


  
  

  

}
