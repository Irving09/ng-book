import { Component } from 'angular2/core';
import { Sku } from './sku/sku.component';

@Component({
    selector: 'app',
    template: `<sku></sku>`,
    directives: [ Sku ]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}