import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'accomodation',
    loadChildren: () => import('./accomodation/accomodation.module').then((m) => m.AccomodationModule),
  },
  {
    path: 'food-and-beverage',
    loadChildren: () => import('./food-and-beverage/food-and-beverage.module').then((m) => m.FoodAndBeverageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'celebration',
    loadChildren: () => import('./celebration/celebration.module').then((m) => m.CelebrationModule),
  },
  {
    path: 'lifestyle',
    loadChildren: () => import('./lifestyle/lifestyle.module').then((m) => m.LifestyleModule),
  },
  {
    path: 'offer',
    loadChildren: () => import('./offer/offer.module').then((m) => m.OfferModule),
  },
  {
    path: 'wedding',
    loadChildren: () => import('./wedding/wedding.module').then((m) => m.WeddingModule),
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  /*{path: '**', component: PageNotFoundComponent, data: {state: 'page-not-found'}},*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: false,
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
