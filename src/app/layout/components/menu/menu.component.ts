import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../utils/app.layout.utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  items: any[] = [];

  constructor(public layoutService: LayoutService) {
    const desiredOrder = [
      'Colaboraciones',
      'Usuarios',
      'Gestión Publicación'

    ];

    this.items = [

      { label: 'Colaboraciones', icon: 'group', link: '/admin/home' },
      { label: 'Usuarios', icon: 'person', link: '/admin/user' },
      { label: 'Gestión Publicación', icon: 'balance', link: '/admin/Gestion' },

      // { label: 'Proveedores', icon: 'local_shipping', link: '/admin/provider' },
      // { label: 'Ticket de Balanza', icon: 'receipt', link: '/admin/ticket-balance' },
      // { label: 'Cuarteo', icon: 'content_cut', link: '/admin/cuarteo' },
      // { label: 'Laboratorio', icon: 'science', link: '/admin/laboratory' },
      // { label: 'Valorización', icon: 'attach_money', link: '/admin/valorization' },
      // { label: 'Orden de pago', icon: 'payment', link: '/admin/pay-order' }
    ];

    this.items.sort((a, b) => {
      return desiredOrder.indexOf(a.label) - desiredOrder.indexOf(b.label);
    });
  }

  ngOnInit(): void {
    this.model = [
      {
        label: 'Inicio',
        items: [{ label: 'Bienvenida', icon: 'pi pi-fw pi-home', routerLink: ['/admin/home'] }]
      },
      {
        label: 'Modulos',
        items: this.items
      }
    ];
  }
}
