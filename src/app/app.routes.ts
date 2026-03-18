import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { LifeCycle } from './life-cycle/life-cycle';
import { Directives } from './directives/directives';
import { Pipes } from './pipes/pipes';
import { ParentComponent } from './parent-component/parent-component';

export const routes: Routes = [
  { path: 'life-cycle', component: LifeCycle },
  { path: 'data-binding', component: DataBinding },
  { path: 'directives', component: Directives },
  { path: 'pipes', component: Pipes },
  { path: 'parent',component:ParentComponent},
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' }
];  