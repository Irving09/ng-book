import { Component } from 'angular2/core';
import { Product } from '../../models/product';
import { ProductsList } from '../products-list/products-list.component';


@Component({
    selector: 'inventory-app',
    templateUrl: './app/components/inventory-app/inventory-app.component.html',
    directives: [ProductsList]
})
export class InventoryApp {
	products: Product[];

    constructor() {
        console.log('InventoryApp component loaded');

        this.products = [
			new Product(
				'MYSHOES', 'Black Running Shoes', '/app/resources/images/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'],
				109.99),
			new Product(
				'NEATOJACKET', 'Blue Jacket', '/app/resources/images/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
			new Product(
				'NICEHAT', 'A Nice Black Hat', '/app/resources/images/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
				29.99)
		];
    }

    productWasSelected(product: Product): void {
		console.log('Product clicked: ', product);
	}
}