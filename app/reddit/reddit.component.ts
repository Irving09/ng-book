import { Component } from 'angular2/core';
import { Article, ArticleComponent } from '../reddit-article/reddit-article.component';

@Component({
    selector: 'reddit',
    templateUrl: './app/reddit/reddit.component.html',
    directives: [ArticleComponent]
})
export class RedditApp {
    articles: Article[];

    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1)
        ];
    }

    addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement): void {
        this.articles.push(new Article(newtitle.value, newlink.value, 0));
        newtitle.value = '';
        newlink.value = '';

        console.log('this.articles', this.articles);
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}