import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pipes',
    loadComponent: () => import('./product/pages/pipes/pipes.component').then(c=>c.PipesComponent),
  },{
    path: 'avanzados',
    loadComponent: () => import('./product/pages/pipes/advanced/advanced.component').then(c=>c.AdvancedComponent)
  },{
    path: 'estructurales',
    loadComponent: () => import('./product/pages/directives/directives.component').then(c=>c.DirectivesComponent),
  },{
    path: 'atributo',
    loadComponent: () => import('./product/pages/directives/attribute/attribute.component').then(c=>c.AttributeComponent),
  },{
    path: 'componente',
    loadComponent: () => import('./product/pages/directives/component/component.component').then(c=>c.ComponentComponent),
  }
]
