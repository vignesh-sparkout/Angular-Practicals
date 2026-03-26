import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'life-cycle',
    loadComponent: () =>
      import('./life-cycle/life-cycle').then(m => m.LifeCycle)
  },
  {
    path: 'data-binding',
    loadComponent: () =>
      import('./data-binding/data-binding').then(m => m.DataBindingComponent)
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./directives/directives').then(m => m.DirectivesComponent)
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./pipes/pipes').then(m => m.PipesComponent)
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./parent-component/parent-component').then(m => m.ParentComponent)
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./service/service').then(m => m.ServiceComponent)
  },

  // Pages
  {
    path: 'home',
    loadComponent: () =>
      import('./Router/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Router/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./Router/contact/contact').then(m => m.Contact)
  },

  // Param
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./Router/product/product').then(m => m.Product)
  },

  // Protected
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./Router/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard],
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./Router/profile/profile').then(m => m.Profile)
      }
    ]
  },

  // Router Events
  {
    path: 'router-events',
    loadComponent: () =>
      import('./Router/router-events/router-events').then(m => m.RouterEvents)
  },

  //Template-Driven
  {
    path: 'template-driven',
    loadComponent:() =>
    import('./template-driven/template-driven').then(m =>m.TemplateDriven)
  },

  // Reactive-Forms
  {
    path:'reactive-form',
    loadComponent:() =>
    import ('./reactive-form/reactive-form').then(m =>m.ReactiveForm)
    
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

// import { DataBindingComponent } from './data-binding/data-binding';
// import { LifeCycleComponent } from './life-cycle/life-cycle';
// import { DirectivesComponent } from './directives/directives';
// import { PipesComponent } from './pipes/pipes';
// import { ParentComponent } from './parent-component/parent-component';
// import { ServiceComponent } from './service/service';

// import { Home } from './Router/home/home';
// import { About } from './Router/about/about';
// import { Contact } from './Router/contact/contact';
// import { Product } from './Router/product/product';
// import { Dashboard } from './Router/dashboard/dashboard';
// import { Profile } from './Router/profile/profile';
// import { RouterEvents } from './Router/router-events/router-events';
// import { NotFound } from './not-found/not-found';

// export const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },

//   // Feature Components
//   { path: 'life-cycle', component: LifeCycleComponent },
//   { path: 'data-binding', component: DataBindingComponent },
//   { path: 'directives', component: DirectivesComponent },
//   { path: 'pipes', component: PipesComponent },
//   { path: 'parent', component: ParentComponent },
//   { path: 'service', component: ServiceComponent },

//   // Pages
//   { path: 'home', component: Home },
//   { path: 'about', component: About },
//   { path: 'contact', component: Contact },

//   // Route Param
//   { path: 'product/:id', component: Product },

//   // Protected + Child Route
//   {
//     path: 'dashboard',
//     component: Dashboard,
//     canActivate: [authGuard],
//     children: [
//       { path: 'profile', component: Profile }
//     ]
//   },

//   // Router Events
//   { path: 'events', component: RouterEvents },

//   // 404
//   { path: '**', component: NotFound }
// ];