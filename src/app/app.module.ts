import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {appRoutingProviders,routing} from './app.routing';

//componentes de registro
import { RegistroComponent } from './login/registro/registro.component';
import { LoginComponent } from './login/login/login.component';
//componentes

import { SidebarComponent } from './navegacion/sidebar/sidebar.component';
import { ReporteComponent } from './pagina/reporte/reporte.component';
import { GenerarReporteComponent } from './pagina/generar-reporte/generar-reporte.component';
import { VerEncuestaComponent } from './pagina/ver-encuesta/ver-encuesta.component';
import { GenerarEncuestaComponent } from './pagina/generar-encuesta/generar-encuesta.component';
import { PaginaComponent } from './pagina/pagina.component';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';

//servicios
import { UsuariosService } from './servicios/usuarios/usuarios.service';
import { HttpClientModule} from "@angular/common/http";
//formularios
import {  ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { VergraficasComponent } from './pagina/vergraficas/vergraficas.component';
import { GraficasComponent } from './componentes/graficas/graficas/graficas.component';
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
    JumbotronComponent,
    VergraficasComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    
  ],
  providers: [appRoutingProviders,UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
