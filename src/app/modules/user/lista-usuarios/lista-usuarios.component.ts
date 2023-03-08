import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../../../models/user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios$!: Observable<User[]>;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.usuarios$ = this.userService.obtenerUsuarios();
  }

}
