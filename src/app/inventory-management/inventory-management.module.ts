import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';

@NgModule({
  declarations: [AddInventoryComponent],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule
  ]
})
export class InventoryManagementModule { }
