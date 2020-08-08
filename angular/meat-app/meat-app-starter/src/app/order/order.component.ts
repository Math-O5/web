import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { Orderservice } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { OrderItem, Order } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup

  delivery : number = 8;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  number = /^[0-9]*$/

  paymentOptions: RadioOption[] = [{
    label: 'Dinheiro',
    value: 'MON',
  }, {
    label: 'Cartão de Crédito',
    value: 'DEB',
  }, {
    label: 'Cartão Refeição',
    value: 'REF',
  }];
  
  constructor(private orderService: Orderservice, 
    private router: Router,
    private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.number)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required]), 
    })
  }

  itemsValue() : number  {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }
  
  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.menuItem.id ,item.quantidade));
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
    });
  } 
}
