import { Component } from 'angular2/core';
import { Product } from '../../models/product';

@Component({
    selector: 'product-image',
    template: `<img class="product-image" [src]=product.imageUrl>`,
    host: { class: 'ui small image' },
    inputs: ['product']
})
export class ProductImage {
	product: Product;
    constructor() {
        console.log('ProductImage component loaded');
    }
}