import * as http from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  getFilteredVehicle: any;
  constructor(private _httpClient: http.HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1'
    );
  }
  getVehicle(id:string): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+ id);
    
  }

  getfilterVehicle(filterTerrm: string): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterTerrm
    );
  }
  getsortVehicle(column: string, order: string): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        'sortBy=' +
        column +
        '&order=' +
        order
    );
  }
  getPagedVehicle(pageNo: number): Observable<Vehicle[]> {
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }
  createVehicle(vehicle: Vehicle): Observable<Vehicle[]> {
    return this._httpClient.post<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',
      vehicle
    );
  }

  deleteVehicle(id: String): Observable<any> {
    return this._httpClient.delete<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+
        '/' +
        id);
    
  }
}
