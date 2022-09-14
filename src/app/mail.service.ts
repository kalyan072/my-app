import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor( private _httpClient: HttpClient) { }

  getMail(): Observable<Mail[]>{
    return this._httpClient.get<Mail[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );

  }
}
