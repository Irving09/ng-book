import { Component } from 'angular2/core';
import { RedditArticle } from '../reddit-article/reddit-article.component';
import { RedditLink } from '../reddit-link/reddit-link.component';

@Component({
    selector: 'reddit',
    template: `
        <reddit-link></reddit-link>
        <reddit-article></reddit-article>
    `,
    directives: [
        RedditArticle,
        RedditLink
    ]
})
export class Reddit {
    constructor() {
        console.log('Reddit component loaded');
    }
}