import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from 'src/app/models/inventory';
import { Price } from 'src/app/models/price';

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
  tagList = []

  price: Price[] = [];

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]]
    });

    this.price.push({ cost: 0, currency: 'EUR', quantity: 1 });

    this.inventory.tags = [];
  }

  addTags(event) {
    event.preventDefault();
    this.tagList.push(this.tagInput);
    this.inventoryForm.patchValue({ tags: this.tagList });
    this.tagInput = '';
    console.log(this.inventory);
  }

  addPrice(event) {
    event.preventDefault();
    this.price.push({ cost: 0, currency: 'INR', quantity: 1 });
  }

  onSubmit(form) {
    this.inventory = form.value;
    this.inventory.tags = this.tagList;
    this.inventory.price = this.price;
    alert('Submitted');
  }

}
