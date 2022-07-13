import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data!: string;
  @Output() dataChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(){
    this.data = "ciao"
    this.dataChange.emit(this.data);
  }



}
