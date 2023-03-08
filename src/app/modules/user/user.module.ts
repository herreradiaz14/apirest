import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {UsuariosRountingModule} from "./user-routing-module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRountingModule,
    HttpClientModule
  ]
})
export class UserModule { }
