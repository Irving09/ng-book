import { Component } from 'angular2/core';

@Component({
    selector: 'inno',
    templateUrl: './app/inno/inno.component.html'
})
export class Inno {
    constructor() {
        console.log('Inno component loaded');
    }
}