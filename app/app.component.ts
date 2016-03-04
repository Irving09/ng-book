import { Component } from 'angular2/core';
import { Sku } from './sku/sku.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { RedditApp } from './reddit/reddit.component';
import { ArticleComponent } from './reddit-article/reddit-article.component';

@Component({
    selector: 'app',
    template: `
        <div class="ui container">
            <reddit></reddit>
        </div>
    `,
    directives: [ Sku, HelloWorld, RedditApp, ArticleComponent ]
})
export class App {
    constructor() {
        console.log('App component loaded');
    }
}