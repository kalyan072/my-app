import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  public mails: Mail[] = [];

  constructor(private _mailService: MailService) {
    this._mailService.getMail().subscribe(
      (data: any)=>{
        this.mails = data;
      },
      (error:any)=>{
        alert('internalserver error')
      }

    )
  }

  ngOnInit(): void {}
}
