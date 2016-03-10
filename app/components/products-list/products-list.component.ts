import { Component, EventEmitter } from 'angular2/core';
import { ProductRow } from '../product-row/product-row.component';
import { Product } from '../../models/product';

// With the inputs option,
// we’re specifying the parameters we expect our component to receive. 
@Component({
    selector: 'products-list',
    templateUrl: './app/components/products-list/products-list.component.html',
	directives: [ProductRow],
	inputs: ['productList'],
	outputs: ['onProductSelected'],
})
export class ProductsList {
	productList: Product[];

	onProductSelected: EventEmitter<Product>;

	currentProduct: Product;

    constructor() {
        console.log('ProductsList component loaded');
        this.onProductSelected = new EventEmitter();
    }

    clicked(product: Product): void {
		this.currentProduct = product;
		this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
    	if (!product || !this.currentProduct) {
			return false;
    	}

        return product.sku === this.currentProduct.sku;
    }
}