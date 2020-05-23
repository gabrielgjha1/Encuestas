import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-generar-encuesta',
  templateUrl: './generar-encuesta.component.html',
  styleUrls: ['./generar-encuesta.component.css']
})
export class GenerarEncuestaComponent implements OnInit {

  comprobar:boolean=true;
  arreglo:number[]=[];
  contador:number=2;
  constructor() { }

  ngOnInit(): void {
  }

  encuesta(){
    console.log(this.comprobar)
    if (this.comprobar===true){
      this.comprobar=false;
      return;
    }

    this.comprobar=true;

  }

  agregar(numero:number){
    this.contador=this.contador+numero;
    console.log(this.contador);
    if (numero<0){
      this.arreglo.pop();
      console.log(this.arreglo);
      return;
    }

    this.arreglo.push(this.contador);
    console.log(this.arreglo);

    const f = document.getElementById('hola');
    console.log(f)
  }
  enviado(f){
    console.log(f);
  }

}
