import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLowercase : string = "Fernando";
  public nameUpper : string = "FERNANDO";
  public fullName : string = "fERnando hErrErA";
  public customDate: Date = new Date();
}
