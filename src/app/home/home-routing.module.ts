import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path:'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'distribution-admin',
        loadChildren: () => import('./pages/dashboard/ico-distribution-admin/ico-distribution-admin.module').then(m => m.IcoDistributionAdminModule)
      },
      {
        path:'distribution-user',
        loadChildren: () => import('./pages/dashboard/ico-distribution-user/ico-distribution-user.module').then(m => m.IcoDistributionUserModule)
      },
      {
        path:'buy-sell',
        loadChildren: () => import('./pages/buy-sell/buy-sell.module').then(m => m.BuySellModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
