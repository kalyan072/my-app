import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caluclator',
  templateUrl: './caluclator.component.html',
  styleUrls: ['./caluclator.component.css']
})
export class CaluclatorComponent implements OnInit {

  public number1: number= 0;
  public number2: number= 0;

  public result: number=0;


  constructor() { }

  ngOnInit(): void {
  }
  sum(){
    this.result =this.number1 + this.number2;
  }

  sub(){
    this.result =this.number1 - this.number2;
  }

  mul(){
    this.result =this.number1 * this.number2;
  }

  div(){
    this.result =this.number1 / this.number2;
  }




}
