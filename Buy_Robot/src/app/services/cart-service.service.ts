import { Injectable } from '@angular/core';
import { IProductModel } from '../catalog/productsModel';
import { ICartDetails } from './cartStats';

@Injectable({
  providedIn: 'root',
})
export class Cart_Service {
  cart: IProductModel[] = [];

  cartTotal: ICartDetails = {
    total: 0,
    quantity: 0,
  };

  incTotal(product: IProductModel) {
    this.cartTotal.total += product.price - product.discount;
  }
  calcQuantity() {
    this.cartTotal.quantity++;
  }
  add(product: IProductModel) {
    this.cart.push(product);
    this.incTotal(product);
    this.calcQuantity();
    console.log(this.cartTotal.total);
  }

  get() {
    console.log('the cart in teh service is ' + this.cart);
  }
}
