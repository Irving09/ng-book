import { Component } from 'angular2/core';

@Component({
    selector: 'hello-world',
    template: `hello-world component loaded`
})
export class HelloWorld {
    constructor() {
        console.log('HelloWorld component loaded');
    }
}