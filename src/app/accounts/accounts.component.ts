import { Component, OnInit } from '@angular/core';
import { accounts } from '../accounts';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  public filterTerm: string = '';
  public column: string = '';
  public order: string = '';

  public accounts: accounts[] = [];

  constructor(private _accountsService: AccountsService) {
    this._accountsService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
  filter() {
    this._accountsService.getfilterAccounts(this.filterTerm).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  page(pageNo: number) {
    this._accountsService.getPagedAccounts(pageNo).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  sort() {
    this._accountsService.getsortAcounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  delete(id: string) {
    this._accountsService.deleteAccounts(id).subscribe(
      (data: any) => {
        alert('Deleted successfully !!!');
        location.reload();
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
}
