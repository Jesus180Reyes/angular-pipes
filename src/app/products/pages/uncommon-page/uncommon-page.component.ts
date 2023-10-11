import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = "Fernando";
  public gender:"male"| "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  changeClient() {
    this.name = "Melissa";
    this.gender = "female";
  }

  public clients: string[] = ["Maria", "Pedro", "Fernando", "Isa", "Eduardo", "Matias", "Natalia"]
  public clientsMap = {
    "=0": "no tenemos ningun cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos 2 esperando.",
    "other": "tenemos # clientes esperando.",
  }
  deleteClient() {
    this.clients.shift();
  }

  public person = {
    name: "Fernando",
    age: 36,
    address: "Ottawa, Canada"
  }

    public myObservableTime  = interval(2000)
                              .pipe(
                                tap(value => console.log(value))
                              )
}
