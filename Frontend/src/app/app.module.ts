import { interceptorProvider } from './servicios/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AgregarEducacionComponent } from './components/educacion/edicion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/educacion/edicion/editar-educacion/editar-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarTrabajoComponent } from './components/trabajo/edicion/agregar-trabajo/agregar-trabajo.component';
import { EditarTrabajoComponent } from './components/trabajo/edicion/editar-trabajo/editar-trabajo.component';
import { EditarSkillComponent } from './components/skills/edicion/editar-skill/editar-skill.component';
import { AgregarSkillComponent } from './components/skills/edicion/agregar-skill/agregar-skill.component';
import { EditarUsuarioComponent } from './components/about/edicion/editar-usuario/editar-usuario.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    TrabajoComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    HomeComponent,
    AgregarTrabajoComponent,
    EditarTrabajoComponent,
    EditarSkillComponent,
    AgregarSkillComponent,
    EditarUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 1,
      "radius": 110,
      "space": 8,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 14,
      "outerStrokeColor": "#ffa500",
      "innerStrokeColor": "#ab8b67",
      "innerStrokeWidth": 5,
      "imageHeight": 20,
      "imageWidth": 20,
      "animationDuration": 1000,
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showImage": true,
      "showBackground": false,
      "responsive": false
      })
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
