import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dat-binding',
  templateUrl: './dat-binding.component.html',
  styleUrls: ['./dat-binding.component.css']
})
export class DatBindingComponent implements OnInit {

  public age:number = 22;
  public name: string ="kalyan"

  constructor() { }

  ngOnInit(): void {
  }

}
