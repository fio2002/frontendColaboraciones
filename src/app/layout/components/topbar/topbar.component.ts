import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../utils/app.layout.utils';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class AppTopbarComponent {

  items!: MenuItem[];
 

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  @ViewChild(
    MenuComponent,{static:false}) menuChild!: MenuComponent;
  constructor(
    public layoutService: LayoutService,
    private route: Router,
   
   
  ) {
   
  }

  

}
