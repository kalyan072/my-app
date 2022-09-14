import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public message: string = 'Elctric car is going to introduce in 2025';

  constructor() { }
}
