import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {

   }

  configUrl = 'https://dog.ceo/api/breeds/image/random';

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }
}


