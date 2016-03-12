import { Component } from 'angular2/core';
import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'simple-http',
    template: `
    	<h2>Basic Request<h2>
    	<button type="button" (click)="makeRequest()">Make Request</button>
    	<div *ngIf="loading">loading...</div>
    	<pre *ngIf="data">{{data | json}}</pre>
    `,
    providers: [HTTP_PROVIDERS]
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
		this.data = null;

		//Note: http.request returns an Observable
		// .subscribe is akin to using .then for promises

		this.http
			.request('http://localhost:3000/posts')
			.subscribe((res: Response) => {

				//Note: when the http.request returns (from the server)
				// this stream will emit a Response object (res)

				this.data = res.json();
				this.loading = false;
			});

		//Note: .subscrbe(emittedValue, failCallback, streamCompletionCallback)
    }
}