import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   
  public cartCount:number=0;

  constructor(private _cartService:CartService) { 
    this._cartService.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
