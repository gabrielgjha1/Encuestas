import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reporte/reportes.service';
import { Reporte } from 'src/app/modelos/reporte.models';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  reporte:Reporte[]=[];

  constructor(public _reporteService:ReportesService  ) { }

  positivo:number=0;
  negativo:number=0;
  Suma:number=0;
  ngOnInit(): void {
    this.TraerReportes();
  }


  TraerReportes(){

    this._reporteService.TraerReportes().subscribe((resp:any)=>{
      
      this.reporte=resp.reporte;
      this.CalcularRegitro(this.reporte)
    });

  }


  CalcularRegitro(element){

    this.reporte.forEach(element => {
      let number =  Number(element.dineroGan);
      let number2 =  Number(element.dineroGas);
      this.positivo+=  number;
      this.negativo+= number2;
      
      
      
    });
    this.Suma=this.positivo-this.negativo;
    console.log(this.Suma)

  }



}
