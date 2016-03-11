import { User } from './user.model';
import { Thread } from './thread.model';

export class Message {
	id: number;
	sentAt: Date;
	isRead: boolean;
	author: User;
	text: string;
	thread: Thread;

	constructor(obj?: any) {
		this.id = obj && obj.id || this.uuid();
		this.isRead = obj && obj.isRead || false;
		this.sentAt = obj && obj.sentAt || new Date();
		this.author = obj && obj.author || null;
		this.text = obj && obj.text || null;
		this.thread = obj && obj.thread || null;
	}

	uuid(): number {
		return 123;
	}
}