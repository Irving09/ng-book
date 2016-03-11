import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators } from 'angular2/common';

@Component({
    selector: 'demo-form-sku-builder',
    templateUrl: './app/components/demo-form-sku-builder/demo-form-sku-builder.component.html',
    directives: [FORM_DIRECTIVES]
})
export class DemoFormSKUBuilder {
	myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        console.log('DemoFormSKUBuilder component loaded');
        this.myForm = fb.group({
        	sku: ['ABC123', Validators.required]
        });
    }

    onSubmit(value: string): void {
    	console.log('you submitted value:', value);
    }
}