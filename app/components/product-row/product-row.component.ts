import { Component } from 'angular2/core';
import { ProductImage } from '../product-image/product-image.component';
import { ProductDepartment } from '../product-department/product-department.component';
import { PriceDisplay } from '../price-display/price-display.component';

import { Product } from '../../models/product';


@Component({
    selector: 'product-row',
    templateUrl: './app/components/product-row/product-row.component.html',
    inputs: ['product'],
    host: { class: 'item' },
    directives: [PriceDisplay, ProductDepartment, ProductImage]
})
export class ProductRow {
	product: Product;
    constructor() {
        console.log('ProductRow component loaded');
    }
}