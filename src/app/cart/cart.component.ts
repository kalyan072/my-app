import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public quantity: number = 0;

  public totalAmount: number = 0;

  public products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.products.push({
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    });
    this.total();
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }

  clear() {
    this.products = [];
  }

  priceLowToHigh() {
    this.products.sort((a, b) => a.price - b.price);
  }

  priceHighToLow() {
    this.products.sort((a, b) => b.price - a.price);
  }

  total() {
    this.totalAmount = 0;
    for (let product of this.products) {
      this.totalAmount = this.totalAmount + product.price * product.quantity;
    }
  }
}
