import { Component } from 'angular2/core';
import { SingleComponent } from '../single-component/single-component';

@Component({
    selector: 'club-component',
    template: `
    	<div>
	      <single-component
	        (putRingOnIt)="ringWasPlaced($event)"
	        ></single-component>
	    </div>
	`,
	directives: [SingleComponent]
})
export class ClubComponent {
    constructor() {
        console.log('ClubComponent component loaded');
    }

    ringWasPlaced(message: string) {
		console.log(`Put your hands up: ${message}`);
	}
}