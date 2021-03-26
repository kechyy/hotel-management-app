import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingComponent } from './wedding.component';
import { ThaiWeddingComponent } from './thai-wedding/thai-wedding.component';
import { WesternWeddingComponent } from './western-wedding/western-wedding.component';
import {WeddingRoutingModule} from './wedding-routing.module';



@NgModule({
  declarations: [WeddingComponent, ThaiWeddingComponent, WesternWeddingComponent],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
