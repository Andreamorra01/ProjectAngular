import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  data : any = {};
  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.dogService.getConfig()
      .subscribe((res: any) => {
        this.data = res;
        console.log(res);

      });
  }


}
