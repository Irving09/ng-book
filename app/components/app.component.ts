import { Component } from 'angular2/core';
import {
    RouteConfig
} from 'angular2/router';

import { Sku } from './sku/sku.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { RedditApp } from './reddit/reddit.component';
import { InventoryApp } from './inventory-app/inventory-app.component';
import { DemoFormSKU } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSKUBuilder } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { SimpleHttp } from './simple-http/simple-http.component';
import { Inno } from './inno/inno.component';
import { RouterApp } from './router-app/router-app.component';

import { ClubComponent } from './club-component/club-component';

@Component({
    selector: 'app',
    template: `
        <div class="ui container">
            <router-app></router-app>
        </div>
    `,
    directives: [
        SimpleHttp,
        HelloWorld,
        RedditApp,
        Inno,
        RouterApp
    ]
})
@RouteConfig([
    { path: '/', name: 'root', redirectTo: ['/Inno'] },
    { path: '/inno', name: 'Inno', component: Inno },
    { path: '/reddit', name: 'Reddit', component: RedditApp },
    { path: '/hello', name: 'Hello', component: HelloWorld },
    { path: '/http', name: 'Http', component: SimpleHttp }
])
export class App {
    constructor() {
        console.log('App component loaded');
    }
}