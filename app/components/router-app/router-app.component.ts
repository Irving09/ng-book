import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'router-app',
    templateUrl: './app/components/router-app/router-app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class RouterApp {
    constructor() {
        console.log('RouterApp component loaded');
    }
}