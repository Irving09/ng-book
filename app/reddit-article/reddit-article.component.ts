import { Component } from 'angular2/core';
import { Article } from './article';

@Component({
    selector: 'reddit-article',
    templateUrl: './app/reddit-article/reddit-article.component.html'
})
export class RedditArticle {
    article: Article;

    constructor() {
        this.article = new Article('Angular 2', 'http://angular.io', 10);
        console.log('this.article:', this.article);
    }

    voteUp() {
        this.article.voteUp();
        return false;
    }

    voteDown() {
        this.article.voteDown();
        return false;
    }
}