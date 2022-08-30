import { AgregarProyectoComponent } from './components/proyectos/edicion/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/edicion/editar-proyecto/editar-proyecto.component';
import { LoginComponent } from './components/login/login.component';
import { EditarUsuarioComponent } from './components/about/edicion/editar-usuario/editar-usuario.component';
import { EditarSkillComponent } from './components/skills/edicion/editar-skill/editar-skill.component';
import { AgregarSkillComponent } from './components/skills/edicion/agregar-skill/agregar-skill.component';
import { EditarTrabajoComponent } from './components/trabajo/edicion/editar-trabajo/editar-trabajo.component';
import { EditarEducacionComponent } from './components/educacion/edicion/editar-educacion/editar-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './components/educacion/edicion/agregar-educacion/agregar-educacion.component';
import { AgregarTrabajoComponent } from './components/trabajo/edicion/agregar-trabajo/agregar-trabajo.component';


const routes: Routes = [
  { path: ""                    , component: HomeComponent},
  { path: "nuevaedu"            , component: AgregarEducacionComponent },
  { path: "editaredu/:id"       , component: EditarEducacionComponent },
  { path: "nuevaexp"            , component: AgregarTrabajoComponent },
  { path: "editarexp/:id"       , component: EditarTrabajoComponent },
  { path: "nuevaskill"          , component: AgregarSkillComponent },
  { path: "editarskill/:id"     , component: EditarSkillComponent },
  { path: "editarusuario/:id"   , component: EditarUsuarioComponent },
  { path: "login"               , component: LoginComponent},
  { path: "editarproyecto/:id"  , component: EditarProyectoComponent},
  { path: "nuevoproyecto"       , component: AgregarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
