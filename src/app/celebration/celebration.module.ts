import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrationComponent } from './celebration.component';
import {CelebrationRoutingModule} from './celebration-routing.module';



@NgModule({
  declarations: [CelebrationComponent],
  imports: [
    CommonModule,
    CelebrationRoutingModule
  ]
})
export class CelebrationModule { }
