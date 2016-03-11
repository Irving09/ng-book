import { Component } from 'angular2/core';

@Component({
    selector: 'chat-window',
    templateUrl: './app/components/chat-window/chat-window.component.html'
})
export class ChatWindow {
    constructor() {
        console.log('ChatWindow component loaded');
    }
}