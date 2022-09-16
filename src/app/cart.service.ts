import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartCount: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(){}

  setValue(value:any){
    this.cartCount.next(value);
  }
  getValue(){
    return this.cartCount.asObservable();
  }
}