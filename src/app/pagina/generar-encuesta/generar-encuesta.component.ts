import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EncuestasService } from 'src/app/servicios/encuestas/encuestas.service';
import { Encuestas } from 'src/app/modelos/encuestas.models';



@Component({
  selector: 'app-generar-encuesta',
  templateUrl: './generar-encuesta.component.html',
  styleUrls: ['./generar-encuesta.component.css']
})
export class GenerarEncuestaComponent implements OnInit {

  comprobar:boolean=false;
  arreglo:number[]=[];
  contador:number=2;
  campos:string[]=[];
  desactivar:boolean=false;
  id:string="";
  constructor(public _EncuestaService:EncuestasService) { }

  ngOnInit(): void {

    this.traerDatos()
  }

  // boton para abrir las encuestas
  encuesta(){
   
    if (this.comprobar===true){
      this.comprobar=false;
      return;
    }

    this.comprobar=true;

  }

// funcion para agregar botones  o quitar botones
  agregar(numero:number){
    this.contador=this.contador+numero;
    if (numero<0){
      this.arreglo.pop();
      console.log(this.arreglo);
      return;
    }

    this.arreglo.push(this.contador);

  }


traerDatos(){

  this._EncuestaService.TraerDatos().subscribe((resp:any)=>{

    this.id= resp.genEncuesta[0]._id;

    console.log(this.id);
    if (resp.genEncuesta.length>=1){
      this.desactivar=true;
    }

  });
  

}


//guardar los datos en la base de datos
  enviado(f){
    
    console.log(f)
// guarda los 4 campos
    this.campos.push(f.campo1,f.campo2,f.campo3,f.campo4);

// si hay algun campo vacio o indefinido lo saca del arreglo
    var filtrado = this.campos.filter(resp=>{
      return resp !=null || undefined;
    })


    let encuestas = new Encuestas (f.titulo,filtrado);
 
    console.log(encuestas)

    Swal.fire({
      title: 'Esta seguro?',
      text: "Solo el administrador podra realizar los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Datos añadidos!',
          'Los cambias han sido guardados',
          'success'
        )

        this._EncuestaService.GuardarDatos(encuestas).subscribe(resp=>{
          location.reload();
        })

      }
      
    })

  
  }


  EliminarEncuesta(){

    Swal.fire({
      title: 'Esta seguro?',
      text: "No se podran recuperar los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado con exito!',
          'Ahora puede crear otra encuesta',
          'success'
        )

       
        this._EncuestaService.Eliminar(this.id).subscribe(resp=>{
         console.log(resp);
         location.reload();

      });
      }
      
    })

  }


}
