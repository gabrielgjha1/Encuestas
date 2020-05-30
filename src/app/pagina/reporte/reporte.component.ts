import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reporte/reportes.service';
import { Reporte } from 'src/app/modelos/reporte.models';
import Swal from 'sweetalert2';

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
  

  }


  EliminarReporte(id:string){



    Swal.fire({
      title: 'Estas seguro que desea eliminar ?',
      text: "No hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Borrar!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          'EL archivo a sido borrado.',
          'success'
          )
        }
        this._reporteService.EliminarDatos(id).subscribe(resp=>{
    
          this.TraerReportes();
    
        });
    })


    console.log(id)

  }



}
