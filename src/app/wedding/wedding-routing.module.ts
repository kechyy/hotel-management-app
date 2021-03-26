import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThaiWeddingComponent} from './thai-wedding/thai-wedding.component';
import {WesternWeddingComponent} from './western-wedding/western-wedding.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'thai-wedding',
        component: ThaiWeddingComponent,
      },
      {
        path: 'western-wedding',
        component: WesternWeddingComponent,
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
export class WeddingRoutingModule{ }
