import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { LifeCycle } from './life-cycle/life-cycle';
import { Directives } from './directives/directives';
import { Pipes } from './pipes/pipes';
import { ParentComponent } from './parent-component/parent-component';
import { ServiceComponent } from './service/service';
import { Home } from './Router/home/home';
import { About } from './Router/about/about';
import { Contact } from './Router/contact/contact';
import { Product } from './Router/product/product';
import { Dashboard } from './Router/dashboard/dashboard';

export const routes: Routes = [
  { path: 'life-cycle', component: LifeCycle },
  { path: 'data-binding', component: DataBinding },
  { path: 'directives', component: Directives },
  { path: 'pipes', component: Pipes },
  { path: 'parent', component: ParentComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },

  //  Route Params
  { path: 'product/:id', component: Product },

  //  Child Routing and Lazy Loading
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./Router/profile/profile').then(m => m.Profile)
      }
    ]
  },

];