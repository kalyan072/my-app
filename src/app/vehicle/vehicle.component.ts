import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  public filterTerm: string = '';
  public column: string = '';
  public order: string = '';
  public vehicles: Vehicle[] = [];

  constructor(private _vehicleService: VehicleService, private router:Router) {
    this._vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
  filter() {
    this._vehicleService.getfilterVehicle(this.filterTerm).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  page(pageNo: number) {
    this._vehicleService.getPagedVehicle(pageNo).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  sort() {
    this._vehicleService.getsortVehicle(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }

  delete(id: string) {
    this._vehicleService.deleteVehicle(id).subscribe(
      (data: any) => {
        alert('Deleted successfully !!!');
        location.reload();
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }

  view(id:string){
    this.router.navigateByUrl('/dashboard/vehicle-details'+'/'+id);

  }
}
