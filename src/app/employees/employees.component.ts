import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public company: string = '';
  public package: number = 0;

  public employees: Employees[] = [];

  constructor() {}

  ngOnInit(): void {}
  add() {
    this.employees.push({
      name: this.name,
      age: this.age,
      company: this.company,
      package: this.package,
    });
  }

  delete(i: number) {
    this.employees.splice(i, 1);
  }
  deleteall() {
    this.employees = [];
  }
  priceLowToHigh() {
    this.employees.sort((a, b) => a.package - b.package);
  }

  priceHighToLow() {
    this.employees.sort((a, b) => b.package - a.package);
  }
}
