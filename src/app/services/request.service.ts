import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, delay, map, Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  public getCoffees():Observable<Coffee[]>{

    return this.http.get<Coffee[]>("https://random-data-api.com/api/coffee/random_coffee?size=50")
    .pipe(delay(2000),
      map((data:Coffee[])=>{
        return data})
    )
  }

}
