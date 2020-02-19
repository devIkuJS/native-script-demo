import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario.component';

const routes: Routes = [
  { path: "", component: DetalleUsuarioComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DetalleUsuarioRoutingModule { }
