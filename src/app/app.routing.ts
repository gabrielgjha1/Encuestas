import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { ReporteComponent } from './pagina/reporte/reporte.component';
import { GenerarEncuestaComponent } from './pagina/generar-encuesta/generar-encuesta.component';
import { GenerarReporteComponent } from './pagina/generar-reporte/generar-reporte.component';
import { VerEncuestaComponent } from './pagina/ver-encuesta/ver-encuesta.component';
import { PaginaComponent } from './pagina/pagina.component';


const routes: Routes = [
    {path:'',component:PaginaComponent,
    children:[ 
    { path: 'reporte', component: ReporteComponent},
    { path: 'gencuesta', component: GenerarEncuestaComponent },
    { path: 'greporte', component: GenerarReporteComponent },
    { path: 'reporte', component: ReporteComponent },
    { path: 'encuesta', component: VerEncuestaComponent },
    { path: '', redirectTo:'/reporte',pathMatch:'full' }
    ]

    },//ruta por defecto
    
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: LoginComponent  }//ruta por si esta mal escrita.
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes)


