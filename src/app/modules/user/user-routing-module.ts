import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], children: [
      { path: 'listar', component: ListaUsuariosComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRountingModule { }
