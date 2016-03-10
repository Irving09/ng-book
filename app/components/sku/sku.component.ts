import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'sku',
    templateUrl: './app/components/sku/sku.component.html',
    directives: [ FORM_DIRECTIVES ]
})
export class Sku {
    constructor() {
        console.log('Sku component loaded');
    }

    onSubmit(value): void {
        console.log('value:', value.sku);
    }
}