import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{

public  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
        {
          label: "Pipes de Angular",
          icon: "pi pi-desktop",
          items: [
            {
              label: "Textos y fechas",
              icon: "pi pi-align-left",

            },
            {
              label: "Numeros",
              icon: "pi pi-dollar",

            },
            {
              label: "No comunes",
              icon: "pi pi-globe",

            },
          ],
        },
        {
          label: "Pipes perzonalizados",
          icon: "pi pi-cog",
          items: [
            {
              label: "Otro Elemento",
              icon: "pi pi-cog"
            }
          ]
        }
      ];
  }

}
