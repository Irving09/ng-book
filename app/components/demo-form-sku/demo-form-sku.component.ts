import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'demo-form-sku',
    templateUrl: './app/components/demo-form-sku/demo-form-sku.component.html',
    directives: [FORM_DIRECTIVES]
})
export class DemoFormSKU {
    constructor() {
        console.log('DemoFormSKU component loaded');
    }

    onSubmit(form: any): void {
    	console.log('you submitted the value:', form);
    }
}