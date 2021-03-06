import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddInventoryComponent],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule,
    SharedModule
  ],
  exports: [
    AddInventoryComponent
  ]
})
export class InventoryManagementModule { }
