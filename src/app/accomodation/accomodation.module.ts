import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import {MaterialModule} from './material.module';
import {AccomodationRoutingModule} from './accomodation-routing.module';



@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule,
    AccomodationRoutingModule,
    MaterialModule
  ]
})
export class AccomodationModule { }
