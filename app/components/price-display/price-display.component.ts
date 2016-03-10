import { Component } from 'angular2/core';

@Component({
    selector: 'price-display',
    template: `<div class="price-display">\${{price}}</div>`,
    inputs: ['price']
})
export class PriceDisplay {
	price: number;
    constructor() {
        console.log('PriceDisplay component loaded');
    }
}