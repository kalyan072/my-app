import { Component, OnInit } from '@angular/core';
import { Datacard } from '../datacard';
import { DatacardService } from '../datacard.service';

@Component({
  selector: 'app-datacard',
  templateUrl: './datacard.component.html',
  styleUrls: ['./datacard.component.css']
})
export class DatacardComponent implements OnInit {

  public datacards:Datacard[] = [];

  constructor(private _datacardService: DatacardService) {
    this._datacardService.getdatacard().subscribe(
      (data: any)=>{
        this.datacards =data;
      },
      (error:any)=>{
        alert('internal server error')
      }

    )
   }

  ngOnInit(): void {
  }

}
