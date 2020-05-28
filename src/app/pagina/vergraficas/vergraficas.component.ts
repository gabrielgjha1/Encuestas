import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';

@Component({
  selector: 'app-vergraficas',
  templateUrl: './vergraficas.component.html',
  styleUrls: ['./vergraficas.component.css']
})
export class VergraficasComponent implements OnInit {

  data:String[]=[];
  campos:String[]=[];
  constructor(public _EcuestaService:EncuestasService) { }

  ngOnInit(): void {
  
    this.TraerGrafica()
  }


  TraerGrafica(){


  

    this._EcuestaService.TraerDatosUsuario().subscribe((resp:any)=>{
  
  
      resp.datosEncuesta[0].encuesta.campo.map((elementos) => { 
        this.campos.push(elementos);
    
      })
      
      console.log(this.campos)

      resp.datosEncuesta.map((elementos) => { 
        this.data.push(elementos.data);
    
      })

      console.log(this.data)
      

    });

    


  }
  

  

}
