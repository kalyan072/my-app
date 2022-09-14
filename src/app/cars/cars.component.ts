import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public car:string ='';
  public message:string = '';

  constructor(private _carServie: CarsService) {
    this.message = this._carServie.message;
   }

  ngOnInit(): void {
  }

}
