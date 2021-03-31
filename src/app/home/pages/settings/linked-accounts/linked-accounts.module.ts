import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedAccountsRoutingModule } from './linked-accounts-routing.module';
import { LinkedAccountsComponent } from './linked-accounts.component';


@NgModule({
  declarations: [LinkedAccountsComponent],
  imports: [
    CommonModule,
    LinkedAccountsRoutingModule
  ]
})
export class LinkedAccountsModule { }
