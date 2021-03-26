import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifestyleComponent } from './lifestyle.component';
import { WelnessAndSpaComponent } from './welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent } from './resort-activities/resort-activities.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import {LifestyleRoutingModule} from './lifestyle-routing.module';



@NgModule({
  declarations: [
    LifestyleComponent,
    WelnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent],
  imports: [
    CommonModule,
    LifestyleRoutingModule
  ]
})
export class LifestyleModule { }
