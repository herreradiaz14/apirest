import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./components/auth/auth.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthGuard } from "./guards/auth.guard";
import { ListaUsuariosComponent } from "./modules/user/lista-usuarios/lista-usuarios.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: AuthComponent },
  { path: 'usuarios',
    loadChildren: () => import('./modules/user/user.module').then((modulo) => modulo.UserModule),
    canLoad: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
