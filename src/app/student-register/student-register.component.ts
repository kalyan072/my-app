import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  public name: string = '';
  public names: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  register() {
    this.names.push(this.name);
  }
  delete() {
    this.names.pop();
  }
  deleteAll() {
    this.names = [];
  }

  deleteEach(i: number) {
    this.names.splice(i, 1);
  }
  reverse() {
    this.names.reverse();
  }
}
