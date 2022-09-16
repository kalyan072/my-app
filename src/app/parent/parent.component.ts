import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public a:string='';
  public b:string='';

  constructor() { }

  ngOnInit(): void {
  }
  catch(value:any){
    this.b = value;
  }

}
