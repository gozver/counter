import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  }, {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})
export class AppRoutingModule { }
