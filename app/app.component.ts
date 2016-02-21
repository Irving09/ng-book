import { Component } from 'angular2/core';
import { Sku } from './sku/sku.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { Reddit } from './reddit/reddit.component';

@Component({
    selector: 'app',
    template: `<reddit></reddit>`,
    directives: [ Sku, HelloWorld, Reddit ]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}