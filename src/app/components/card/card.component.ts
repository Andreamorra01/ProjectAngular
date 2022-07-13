import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  data : any = {};
  fraseUno : string = "Questa è una prova"
  fraseDue : string = "QUESTO TEST SARA' PICCOLO"
  euro : number = 200
  fraseTre : string = "Hello world"
  observable!:Observable<any>;
  

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    // this.showConfig();
    this.observable=this.dogService.getConfig()
  }

  showConfig() {
    this.dogService.getConfig()
      .subscribe((res: any) => {
        this.data = res;
        console.log(res);

      });
  }

  getDogService() {
    return this.dogService.getConfig()
  }


}
