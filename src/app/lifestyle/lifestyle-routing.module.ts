import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExcursionsComponent} from './excursions/excursions.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import {ResortActivitiesComponent} from './resort-activities/resort-activities.component';
import {WelnessAndSpaComponent} from './welness-and-spa/welness-and-spa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'excursions',
        component: ExcursionsComponent,
      },
      {
        path: 'experiences',
        component: ExperiencesComponent,
      },
      {
        path: 'resort-activities',
        component: ResortActivitiesComponent,
      },
      {
        path: 'welness',
        component: WelnessAndSpaComponent,
      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LifestyleRoutingModule{ }
