import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import {FormsModule} from '@angular/forms';
import {appRoutingProviders,routing} from './app.routing';
import { RegistroComponent } from './login/registro/registro.component';
import { SidebarComponent } from './navegacion/sidebar/sidebar.component';
import { ReporteComponent } from './pagina/reporte/reporte.component';
import { GenerarReporteComponent } from './pagina/generar-reporte/generar-reporte.component';
import { VerEncuestaComponent } from './pagina/ver-encuesta/ver-encuesta.component';
import { GenerarEncuestaComponent } from './pagina/generar-encuesta/generar-encuesta.component';
import { PaginaComponent } from './pagina/pagina.component';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    SidebarComponent,
    ReporteComponent,
    GenerarReporteComponent,
    VerEncuestaComponent,
    GenerarEncuestaComponent,
    PaginaComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
