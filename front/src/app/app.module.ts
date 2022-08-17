import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    TrabajoComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
      "responsive": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
