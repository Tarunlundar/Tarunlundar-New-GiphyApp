import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Headers="Gif Search"

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }
Search(SerchText:string){
  if (SerchText !==''){
    this.dataService.SearchGif(SerchText);
  }else{
    alert('Please Enter Search Value')
  }
}
}
