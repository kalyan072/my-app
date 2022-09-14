import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datacard } from './datacard';

@Injectable({
  providedIn: 'root'
})
export class DatacardService {

  constructor(private _httpClient: HttpClient) { }

  getdatacard(): Observable<Datacard[]>{
    return this._httpClient.get<Datacard[]>('https://jsonplaceholder.typicode.com/users');
  }
}
