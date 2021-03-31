import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcoDistributionAdminRoutingModule } from './ico-distribution-admin-routing.module';
import { IcoDistributionAdminComponent } from './ico-distribution-admin.component';


@NgModule({
  declarations: [IcoDistributionAdminComponent],
  imports: [
    CommonModule,
    IcoDistributionAdminRoutingModule
  ]
})
export class IcoDistributionAdminModule { }
