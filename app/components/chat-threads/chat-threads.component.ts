import { Component } from 'angular2/core';

@Component({
    selector: 'chat-threads',
    templateUrl: './app/components/chat-threads/chat-threads.component.html'
})
export class ChatThreads {
    constructor() {
        console.log('ChatThreads component loaded');
    }
}