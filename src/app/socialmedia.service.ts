import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socialmedia } from './socialmedia';

@Injectable({
  providedIn: 'root',
})
export class SocialmediaService {
  constructor(private _httpClient: HttpClient) {}

  getSocialmedia(): Observable<Socialmedia[]> {
    return this._httpClient.get<Socialmedia[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
