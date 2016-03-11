import { Component } from 'angular2/core';
import { ChatNavBar } from '../chat-navbar/chat-navbar.component';
import { ChatThreads } from '../chat-threads/chat-threads.component';
import { ChatWindow } from '../chat-window/chat-window.component';

@Component({
    selector: 'chat-app',
    templateUrl: './app/components/chat-app/chat-app.component.html',
    directives: [
    	ChatThreads,
    	ChatWindow,
    	ChatNavBar
    ]
})
export class ChatApp {
    constructor() {
        console.log('ChatApp component loaded');
    }
}