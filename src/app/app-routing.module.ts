import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutTemplate } from './layout/layout/layout.template';

// const sesion = new CmSessionService();
// user = CmSessionService.session.getInfo();


let itemsRoute: any[] = [];


console.log(itemsRoute);

const routes: Routes = [
  {
    path: 'acceso',

    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'admin',
    component: AppLayoutTemplate,
    children: [

      {
        path: 'home', 
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
      },
     
    ]
  },
  
  {
    path: '',
    redirectTo: 'acceso',
    pathMatch: 'full'
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
