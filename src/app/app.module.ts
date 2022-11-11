import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { coffeeReducer } from './state/reducer/coffee.reducer';
import { ROOT_REDUCERS } from './state/app.state';
import { CoffeeItemComponent } from './componets/coffee/coffee-item/coffee-item.component';
import { CoffeeComponent } from './componets/coffee/coffee-page/coffee.component';
import { CoffeeItemListComponent } from './componets/coffee/coffee-item-list/coffee-item-list.component';
import { CoffeeEffects } from './state/effects/coffee-effects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDividerModule} from '@angular/material/divider'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeItemComponent,
    CoffeeItemListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({name:'test'}),
    EffectsModule.forRoot([CoffeeEffects]),
    NoopAnimationsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
