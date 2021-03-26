import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {MaterialModule} from './material.module';
import {FoodAndBeverageRoutingModule} from './food-and-beverage-routing.module';
import { FoodAndBeverageComponent } from './food-and-beverage.component';
import { BarComponent } from './bar/bar.component';



@NgModule({
  declarations: [RestaurantComponent, FoodAndBeverageComponent, BarComponent],
  imports: [
    CommonModule,
    FoodAndBeverageRoutingModule,
    MaterialModule
  ]
})
export class FoodAndBeverageModule { }
