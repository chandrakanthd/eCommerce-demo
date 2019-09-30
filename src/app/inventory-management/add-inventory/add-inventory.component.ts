import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from 'src/app/models/inventory';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  inventoryForm: FormGroup;

  inventory = {} as Inventory;

  tagInput = '';

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tag: ['']
    });

    this.inventory.tags = [];
  }

  addTags(event) {
    event.preventDefault();
    this.inventory.tags.push(this.inventoryForm.value.tag);
    this.inventoryForm.patchValue({ tag: '' });
    console.log(this.inventory);
  }

  onSubmit(form) {
    console.log(form);
  }

}
