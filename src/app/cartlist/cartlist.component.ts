import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  public cartCount:number=0;

  constructor(private _CartService:CartService) {

    this._CartService.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }
    
  

  ngOnInit(): void {
  }

}
