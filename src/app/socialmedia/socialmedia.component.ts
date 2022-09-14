import { Component, OnInit } from '@angular/core';
import { Socialmedia } from '../socialmedia';
import { SocialmediaService } from '../socialmedia.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  public socialmedia: Socialmedia[] = [];


  constructor(private _socialmediaservice: SocialmediaService) {
    this._socialmediaservice.getSocialmedia().subscribe(

      (data: any)=>{
        this.socialmedia = data
      },
      (error: any)=>{
        alert('internal server error')
      }
    )
   }

  ngOnInit(): void {
  }

}
