import { Component } from 'angular2/core';

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: './app/reddit-article/reddit-article.component.html'
})
export class ArticleComponent {
    article: Article;
    constructor() {
        this.article = new Article('Angular 2', 'http://angular.io', 10);
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

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}