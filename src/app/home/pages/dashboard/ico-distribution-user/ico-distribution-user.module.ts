import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcoDistributionUserRoutingModule } from './ico-distribution-user-routing.module';
import { IcoDistributionUserComponent } from './ico-distribution-user.component';


@NgModule({
  declarations: [IcoDistributionUserComponent],
  imports: [
    CommonModule,
    IcoDistributionUserRoutingModule
  ]
})
export class IcoDistributionUserModule { }
