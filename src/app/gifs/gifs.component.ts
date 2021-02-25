import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs:any[]=[];
  constructor(
    private dataservice:DataService
  ) { }

  ngOnInit(): void {
    this.dataservice.getGifs()
    .subscribe((response:any)=>{
       this.gifs=response
    });
  }
}
