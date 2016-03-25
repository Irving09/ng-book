import { Component } from 'angular2/core';

import { Sku } from './sku/sku.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { RedditApp } from './reddit/reddit.component';
import { InventoryApp } from './inventory-app/inventory-app.component';
import { DemoFormSKU } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSKUBuilder } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { SimpleHttp } from './simple-http/simple-http.component';

import { ClubComponent } from './club-component/club-component';

@Component({
    selector: 'app',
    template: `
        <div class="ui container">
            <simple-http></simple-http>
        </div>
    `,
    directives: [
        SimpleHttp,
        HelloWorld
    ]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}