import { Injectable, bind } from 'angular2/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

import { Message } from '../../models/chat-app/message.model';
import { User } from '../../models/chat-app/user.model';
import { Thread } from '../../models/chat-app/thread.model';

import { IMessagesOperation } from '../../interfaces/chat-app/IMessagesOperation';

@Injectable()
export class MessageService {
	newMessage: Subject<Message> = new BehaviorSubject<Message>(null);
	messages: Observable<Message[]>;
	updates: Subject<any> = new Subject<any>();

	initialMessages: Message[] = [];

	constructor() {
		this.messages = this.updates
			.scan((messages: Message[], operation: IMessagesOperation) => {
				return operation(messages);
			}, this.initialMessages);
	}

	addMessage(message: Message): void {
		this.newMessage.next(message);
	}

	messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
		return this.newMessage
			.filter((message: Message) => {
				// belongs to this thread
				return (message.thread.id === thread.id) &&
					// and isn't authored by this user
					(message.author.id !== user.id);
			});
	}
}

export var MessageServiceInjectables: Array<any> = [
	bind(MessageService).toClass(MessageService)
];