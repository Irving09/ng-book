import { Component } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Component({
    selector: 'simple-http',
    template: `
    	<h2>Basic Request<h2>
    	<button type="button" (click)="makeRequest()">Make Request</button>
    	<div *ngIf"loading">loading...</div>
    	<pre>{{data | json}}</pre>
    `
})
export class SimpleHttp {
	loading: boolean;
	data: Object;
    constructor(public http: Http) {
        console.log('SimpleHttp component loaded');
    }

    ngOnInit() {
		this.loading = false;
    }

    makeRequest() {
		this.loading = true;

		//Note: http.request returns an Observable
		// .subscribe is akin to using .then for promises

		this.http
			.request('http://jsonplaceholder.typicode.com/posts/1')
			.subscribe((res: Response) => {

				//Note: when the http.request returns (from the server)
				// this stream will emit a Response object (res)

				this.data = res.json();
				this.loading = false;
			});

		//Note: .subscrbe(emittedValue, failCallback, streamCompletionCallback)
    }
}