import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "DareDevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.green
    },
    {
      name: "Green Lantern",
      canFly: true,
      color: Color.green
    },
  ]

  public isUpperCase: boolean = false;

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;

  }
}
