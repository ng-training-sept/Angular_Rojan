import { Routes } from "@angular/router";
import { SportsComponent } from "./sports.component";

export const routes: Routes = [
    { path: '', redirectTo: 'sports', pathMatch: 'full' },
    { path: 'sports', component: SportsComponent }
  ];