import { Component, EventEmitter } from 'angular2/core';

@Component({
    selector: 'single-component',
    template: `
    	<button (click)="liked()">Like it?</button>
    `,
    outputs: ['putRingOnIt']
})
export class SingleComponent {
	putRingOnIt: EventEmitter<string>;

    constructor() {
        console.log('SingleComponent component loaded');
        this.putRingOnIt = new EventEmitter();
    }

    liked(): void {
		this.putRingOnIt.emit('oh oh oh');
    }
}