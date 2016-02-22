import { Component } from 'angular2/core';

@Component({
    selector: 'reddit-link',
    templateUrl: './app/reddit-link/reddit-link.component.html'
})
export class RedditLink {
    constructor() {
        console.log('Reddit-link component loaded');
    }

    addArticle(newtitle, newlink): void {
        console.log('newtitle.value:', newtitle.value);
        console.log('newlink.value:', newlink.value);
    }
}