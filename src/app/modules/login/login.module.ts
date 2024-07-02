import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { AccesoComponent } from './pages/acceso/acceso.component';
import { AccesoFormComponent } from './components/acceso-form/acceso-form.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    AccesoComponent,
    AccesoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    SharedModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    DropdownModule



  ]
})
export class LoginModule { }
