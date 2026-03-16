import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { LifeCycle } from './life-cycle/life-cycle';

export const routes: Routes = [
  { path: 'life-cycle', component: LifeCycle },
  { path: 'data-binding', component: DataBinding },
  { path: '', redirectTo: 'life-cycle', pathMatch: 'full' }
];  