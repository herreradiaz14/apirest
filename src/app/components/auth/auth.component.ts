import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../models/user';
import { AuthService } from  '../../services/auth.service';
import {UserService} from "../../modules/user/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isSubmitted  =  false;
  username = '';
  password = '';

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get formControls() {
    return this.authForm.controls;
  }

  signIn(){
    this.isSubmitted = true;
    if (this.authForm.invalid){
      alert("Ingrese un usuario y conttraseña");
      return;
    }

    this.userService.obtenerUsuarios().subscribe(data=> {
      const usuarioLogueado = data.find(e=>e.username==this.username && e.password == this.password)

      if(usuarioLogueado){
        this.authService.signIn(this.authForm.value);
        this.router.navigateByUrl('/admin');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
