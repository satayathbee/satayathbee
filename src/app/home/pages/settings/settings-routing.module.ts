import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path:'',
    component:SettingsComponent,
    children:[
      {
        path:'',
        redirectTo:'profile',
        pathMatch:'full'
      },
      {
        path:'linked-accounts',
        loadChildren: () => import('./linked-accounts/linked-accounts.module').then(m => m.LinkedAccountsModule)
      },
      {
        path:'preference',
        loadChildren: () => import('./preference/preference.module').then(m => m.PreferenceModule)
      },
      {
        path:'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path:'security',
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
