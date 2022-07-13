import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provafor',
  templateUrl: './provafor.component.html',
  styleUrls: ['./provafor.component.scss']
})
export class ProvaforComponent implements OnInit {

  myList:number[] = [1,2,3,4,4];

  constructor() { }

  ngOnInit(): void {
  }

}
