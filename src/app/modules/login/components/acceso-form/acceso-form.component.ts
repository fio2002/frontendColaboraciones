import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IUser } from '../../../../core/interfaces/user.model';

@Component({
  selector: 'app-acceso-form',
  templateUrl: './acceso-form.component.html',
  styleUrls: ['./acceso-form.component.scss']
})
export class AccesoFormComponent {
  loginForm: FormGroup;
  user: IUser | null = null;
  formValid = false;

  // companies = [
  //   { name: 'Compañía 1', code: '1' },
  //   { name: 'Compañía 2', code: '2' }
  // ];
  // private staticUsers = [
  //   { cuenta: 'admin', clave: 'admin123', company: '1' },
  //   { cuenta: 'user', clave: 'user123', company: '2' }
  // ];
  private staticUsers = [
    { cuenta: 'admin', clave: 'admin123'  },
    { cuenta: 'user', clave: 'user123' }
  ];
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      cuenta: ['', Validators.required],
      clave: ['', Validators.required],
      // company: ['', Validators.required]
    });
  }

  setearForm() {
    this.user = this.loginForm.value as IUser;
    console.log(this.user);
  }

  pintar() {
    console.log('Fiorella deja chambear', this.loginForm.value);
  }

  save() {
    this.setearForm();

    if (this.user) {
      // Verificar credenciales ingresadas con las credenciales estáticas
      const credencialesValidas = this.staticUsers.find(u =>
        u.cuenta === this.user?.cuenta && u.clave === this.user?.clave
      );

      console.log('staticUsers:', this.staticUsers); // Impresión corregida en consola

      if (credencialesValidas) {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/admin/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales incorrectas'
        });
      }
    }
  }
}
