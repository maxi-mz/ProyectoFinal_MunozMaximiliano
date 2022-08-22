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
      "responsive": false,
      "percent":10})
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
