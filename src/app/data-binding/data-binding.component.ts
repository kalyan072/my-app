import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  public age: number = 22;
  public name: string = 'kalyan';
  public isindian: boolean = true;

  public phones: number[] = [9989, 9494, 8160];

  public courses: string[] = ['Angular', 'react'];

  public user: User = { name: 'john', city: 'texas' };

  public student: Student = {
    name: 'kalyan',
    id: 'H122',
    marks: 87,
  };

  public employee: Employee = {
    name: 'Kalyan',
    company: 'Dell',
    package: '12.5L',
  };
  public users: User[] = [
    { name: 'john', city: 'texas' },
    { name: 'kalyan', city: 'Hyderabad' },
    { name: 'Ram', city: 'Delhi' },
  ];
  public students: Student[] = [
    { name: 'kalyan', id: 'H122', marks: 90 },
    { name: 'Anil', id: 'H123', marks: 78 },
    { name: 'Ram', id: 'N134', marks: 88 },
    { name: 'Balu', id: 'N146', marks: 89 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
