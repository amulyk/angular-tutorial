import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: ['', [this.forbiddenName(), Validators.minLength(2)]],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Oliver' ? {forbiddenName: {isValid: true}} : null;
    };
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.patchValue({
      name: 'John Doe'
    });
  }

  get name() {
    return this.checkoutForm.get('name') as FormControl;
  }

  ngOnInit() {
  }

}
