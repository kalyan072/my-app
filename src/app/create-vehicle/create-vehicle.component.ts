import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    Manufacturer: new FormControl(),
    Model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  })
 
  
 
  constructor(private _vehicleService:VehicleService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.vehicleForm.value);

    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert('Created succesfully !!!');
      },
      (error:any)=>{
        alert('Internal server error');
      }
    )

  }

}
