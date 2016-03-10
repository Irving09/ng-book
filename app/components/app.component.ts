import { Component } from 'angular2/core';
import { Sku } from './sku/sku.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { RedditApp } from './reddit/reddit.component';
import { InventoryApp } from './inventory-app/inventory-app.component';
import { ClubComponent } from './club-component/club-component';

@Component({
    selector: 'app',
    template: `
        <div class="ui container">
            <inventory-app></inventory-app>
        </div>
    `,
    directives: [Sku, HelloWorld, RedditApp, InventoryApp, ClubComponent]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}