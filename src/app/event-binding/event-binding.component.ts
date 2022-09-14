import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submit() {
    alert('submit clicked');
  }

  cancel(){
    alert("cancel double clicked");
  }

  test() {
    alert('key up');
  }

  test2(){
    alert('key down');
  }

  test3(){
    alert('key press');
  }

  test4(){
    alert('mouse enter');
  }

  test5(){
    alert('mouse leave');
  }


}
