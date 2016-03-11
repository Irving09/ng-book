import { Component } from 'angular2/core';

@Component({
    selector: 'chat-navbar',
    templateUrl: './app/components/chat-navbar/chat-navbar.component.html'
})
export class ChatNavBar {
    constructor() {
        console.log('ChatNavBar component loaded');
    }
}