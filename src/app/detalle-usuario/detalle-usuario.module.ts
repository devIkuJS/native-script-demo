import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DetalleUsuarioRoutingModule } from './detalle-usuario-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DetalleUsuarioComponent } from './detalle-usuario.component';


@NgModule({
  
  imports: [
    NativeScriptCommonModule,
    DetalleUsuarioRoutingModule
  ],
  declarations: [
    DetalleUsuarioComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DetalleUsuarioModule { }
