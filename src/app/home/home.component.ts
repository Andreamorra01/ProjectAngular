import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() user:string = "" ;
  totaleEuro: number;
  numero:number;
  numeroDue:number;
  today:Date;
  sum = (n1: number, n2: number):number =>{
    return n1 + n2
   }

  show:boolean = true

  constructor() {
    this.numero = 11
    this.numeroDue = 5
    this.today = new Date()
    this.totaleEuro = this.sum(this.numero,this.numeroDue)
   }
   
   showHidden = ():void =>{
    this.show =! this.show
    console.log("falso");
    
   }


  ngOnInit(): void {
  }

}
