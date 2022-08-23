import { EditarEducacionComponent } from './components/educacion/edicion/editar-educacion/editar-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarEducacionComponent } from './components/educacion/edicion/agregar-educacion/agregar-educacion.component';


const routes: Routes = [
  { path: ""           ,component:HomeComponent},
  { path: "nuevaedu"   ,component: AgregarEducacionComponent },
  { path: "editaredu/:id"  ,component: EditarEducacionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
