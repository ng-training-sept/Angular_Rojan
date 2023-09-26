import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';


export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{path: 'sports', component: SportsComponent}, // Eagerly loading route
  {path: 'grocery', component: GroceryComponent}, 
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component')
  .then(m => m.SportsComponent) }, // Lazily loading route
  { path: 'home', loadComponent: () => import('./forms/home/home.component')
  .then(m => m.HomeComponent) }, // Lazily loading route
  
  { path: 'sports/card-item/:id', component: CardItemComponent},
  {path: 'grocery', loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)}
];

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),provideRouter(routes)]
};
