import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.css']
})
export class CoffeeItemComponent implements OnInit {


  @Input() coffee:any

  constructor() { }

  ngOnInit(): void {
  }

}
