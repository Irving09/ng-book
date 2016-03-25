///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import {
    ROUTER_PROVIDERS,
    APP_BASE_HREF,
    HashLocationStrategy,
    LocationStrategy
} from 'angular2/router';

import { App } from './components/app.component';

const dependencies = [
	ROUTER_PROVIDERS,
	// provide(APP_BASE_HREF, {
	// 	useValue: '/',
	// }),
	provide(LocationStrategy, {
		useClass: HashLocationStrategy
	})
];

bootstrap(App, dependencies)
	.catch(e => console.log('e', e));