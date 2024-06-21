import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { HomeVistaComponent } from './components/home-vista/home-vista.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeVistaComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  
  ]
})
export class HomeModule { }
