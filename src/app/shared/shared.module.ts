import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MenubarComponent } from './components/menubar/menubar.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenubarComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
  

  ],
  exports: [
    MenuComponent,
    MenubarComponent,
  ]
})
export class SharedModule { }
