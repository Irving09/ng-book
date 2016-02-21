import { Component } from 'angular2/core';

@Component({
    selector: 'reddit',
    templateUrl: './app/reddit/reddit.component.html'
})
export class Reddit {
    constructor() {
        console.log('Reddit component loaded');
    }
}