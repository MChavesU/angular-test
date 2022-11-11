import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectCoffeeList } from 'src/app/state/selectors/coffee.selector';

@Component({
  selector: 'app-coffee-item-list',
  templateUrl: './coffee-item-list.component.html',
  styleUrls: ['./coffee-item-list.component.css']
})
export class CoffeeItemListComponent implements OnInit {

  coffees$:Observable<any> = new Observable<any>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.coffees$ = this.store.select(selectCoffeeList);
  }

}
