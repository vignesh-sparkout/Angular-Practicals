import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Lazy Routes (No imports needed)
  {
    path: 'life-cycle',
    loadComponent: () => import('./life-cycle/life-cycle').then(m => m.LifeCycle)
  },
  {
    path: 'data-binding',
    loadComponent: () => import('./data-binding/data-binding').then(m => m.DataBinding)
  },
  {
    path: 'directives',
    loadComponent: () => import('./directives/directives').then(m => m.Directives)
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes').then(m => m.Pipes)
  },
  {
    path: 'parent',
    loadComponent: () => import('./parent-component/parent-component').then(m => m.ParentComponent)
  },
  {
    path: 'service',
    loadComponent: () => import('./service/service').then(m => m.ServiceComponent)
  },

  // Routing Pages
  {
    path: 'home',
    loadComponent: () => import('./Router/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./Router/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () => import('./Router/contact/contact').then(m => m.Contact)
  },

  // Route Param
  {
    path: 'product/:id',
    loadComponent: () => import('./Router/product/product').then(m => m.Product)
  },

  // Dashboard (Protected + Child Lazy)
  {
    path: 'dashboard',
    loadComponent: () => import('./Router/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./Router/profile/profile').then(m => m.Profile)
      }
    ]
  },

  // 404
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found').then(m => m.NotFound)
  }

];






// import { Routes } from '@angular/router';
// import { authGuard } from './auth-guard';
// import { DataBinding } from './data-binding/data-binding';
// import { LifeCycle } from './life-cycle/life-cycle';
// import { Directives } from './directives/directives';
// import { Pipes } from './pipes/pipes';
// import { ParentComponent } from './parent-component/parent-component';
// import { ServiceComponent } from './service/service';
// import { Home } from './Router/home/home';
// import { About } from './Router/about/about';
// import { Contact } from './Router/contact/contact';
// import { Product } from './Router/product/product';
// import { Dashboard } from './Router/dashboard/dashboard';
// import { NotFound } from './not-found/not-found';

// export const routes: Routes = [
//   { path: '', redirectTo:'home', pathMatch:'full'},
//   { path: 'life-cycle', component: LifeCycle },
//   { path: 'data-binding', component: DataBinding },
//   { path: 'directives', component: Directives },
//   { path: 'pipes', component: Pipes },
//   { path: 'parent', component: ParentComponent },
//   { path: 'service', component: ServiceComponent },
//   { path: 'home', component: Home },
//   { path: 'about', component: About },
//   { path: 'contact', component: Contact },

//   //  Route Params
//   { path: 'product/:id', component: Product },

//   //  Child Routing and Lazy Loading
//   {
//     path: 'dashboard',
//     component: Dashboard,
//     canActivate:[authGuard],
//     children: [
//       {
//         path: 'profile',
//         loadComponent: () =>
//           import('./Router/profile/profile').then(m => m.Profile)
//       }
//     ]
//   },
//   { path:'**',component:NotFound}

// ];
