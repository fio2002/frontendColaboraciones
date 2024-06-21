import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../../utils/app.layout.utils';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class AppSidebarComponent {

  constructor(
    public layoutService: LayoutService,
    public el: ElementRef
  ) { }

}
