import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MenubarModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: "Básicos",
            icon: "pi pi-star",
            routerLink: ['/pipes']
          },
          {
            label: "Avanzados",
            icon: "pi pi-th-large",
            routerLink: ['/avanzados']
          }
        ]
      },
      {
        label: "Directivas",
        icon: "pi pi-cog",
        items: [
          {
            label: "Estucturales",
            icon: "pi pi-align-left",
            routerLink: ['/estructurales']
          },
          {
            label: "Atributo",
            icon: "pi pi-tag",
            routerLink: ['/atributo']
          },
          {
            label: "Componente",
            icon: "pi pi-table",
            routerLink: ['/componente']
          },
        ]
      }
    ]
  }

}
