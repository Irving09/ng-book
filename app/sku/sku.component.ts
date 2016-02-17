import { Component } from 'angular2/core';

@Component({
    selector: 'sku',
    templateUrl: './app/sku/sku.component.html'
})
export class Sku {
    constructor() {
        console.log('Sku component oaded');
    }
}