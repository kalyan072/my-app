import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accounts } from './accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private _httpClient: HttpClient) {}

  getAccounts(): Observable<accounts[]> {
    return this._httpClient.get<accounts[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'
    );
  }
  getfilterAccounts(filterTerrm: string): Observable<accounts[]> {
    return this._httpClient.get<accounts[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterTerrm
    );
  }
  getsortAcounts(column: string, order: string): Observable<accounts[]> {
    return this._httpClient.get<accounts[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        'sortBy=' +
        column +
        '&order=' +
        order
    );
  }
  getPagedAccounts(pageNo: number): Observable<accounts[]> {
    return this._httpClient.get<accounts[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }
  deleteAccounts(id: String): Observable<any> {
    return this._httpClient.delete<accounts>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }
}
