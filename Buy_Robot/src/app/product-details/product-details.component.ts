import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from '../catalog/productsModel';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  standalone: true,
  imports: [NgClass, NgIf, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() product!: IProductModel;
  @Output() buyProduct = new EventEmitter<IProductModel>();
  cart: IProductModel[] = [];
  createUrl(product: IProductModel): string {
    return `/images/robot-parts/${product.imageName}`;
  }
  buyButtonClicked(product: IProductModel) {
    this.buyProduct.emit(product);
  }
}
