import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    address: new FormGroup({
      State: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    cards: new FormArray([]),
    paymentType: new FormControl(),
    upiId: new FormControl(),
    cardNo:new FormControl()
  });

  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl('',[Validators.required,Validators.min(100),Validators.max(999)]),
      })
    );
  }

  Remove(i:number) {
    this.cardsFormArray.removeAt(i);
  }

  Submit() {
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }
}
  

