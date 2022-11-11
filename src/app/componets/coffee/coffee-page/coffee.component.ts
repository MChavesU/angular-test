import { state } from '@angular/animations';
import { Component, Injectable, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { RequestService } from 'src/app/services/request.service';
import { loadCoffees, loadCoffeesSuccess } from 'src/app/state/actions/coffee.action';
import { AppState } from 'src/app/state/app.state';
import { selectCoffeeList, selectLoading } from 'src/app/state/selectors/coffee.selector';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {


  loading$ : Observable<boolean> = new Observable();

  constructor(private requestService:RequestService, private store:Store<AppState>) {

   }
  
  ngOnInit(): void {

    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadCoffees())
  }

}
