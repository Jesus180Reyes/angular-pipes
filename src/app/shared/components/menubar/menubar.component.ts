import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  public items: MenuItem[] = [];
  ngOnInit(): void {

    this.items = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'Textos y fechas',
                  icon: 'pi pi-sort-numeric-down',
                  routerLink: "/"
              },
              {
                  label: 'No Comunes',
                  icon: 'pi pi-sort-numeric-down',
                  routerLink: "/uncommon"
                 
              },
              {
                  label: 'Numeros ',
                  icon: 'pi pi-dollar',
                  routerLink: "/numbers"
              },
              {
                  separator: true
              },
             
          ]
      },
     
      {
          label: 'Pipes Perzonalizados',
          icon: 'pi pi-cog',
          items: [
             
              {
                  label: 'Custom Pipes',
                  icon: 'pi pi-cog',
                  routerLink: "custom"
              }
          ]
      },
     
    
  ];

  }

}
