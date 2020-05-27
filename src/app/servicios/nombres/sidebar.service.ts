import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from 'src/app/config/url';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(public http:HttpClient,public router:Router) { }


  TraerSidebar(){

    let url = URLs+'sibebar';

    return this.http.get(url).catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Usted no esta logeado',
      })

      this.router.navigate(['/login']);

        return Observable.throw(err);
    });
 

  }



}
