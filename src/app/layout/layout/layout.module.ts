import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from '../components/sidebar/sidebar.component';
import { AppTopbarComponent } from '../components/topbar/topbar.component';
import { AppLayoutTemplate } from './layout.template';
import { MenuComponent } from '../components/menu/menu.component';

import { AppRoutingModule } from '../../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
@NgModule({
  declarations: [
    AppLayoutTemplate,
    AppSidebarComponent,
    AppTopbarComponent,
    MenuComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    ToolbarModule, AvatarModule
  ],
  exports: [AppLayoutTemplate]
})
export class AppLayoutModule { }
