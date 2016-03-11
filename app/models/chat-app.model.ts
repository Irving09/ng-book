export class Thread {
	id: number;
	lastMessage: Message;
	name: string;
	avatarSrc: string;

	constructor(id?: number, name?: string, avatarSrc?: string) {
		this.id = id || this.uuid();
		this.name = name;
		this.avatarSrc = avatarSrc;
	}

	uuid(): number {
		return 123;
	}
}

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

export class User {
	id: number;

	constructor(public name: string, public avatarSrc: string) {
		this.id = this.uuid();
	}

	uuid(): number {
		return 123;
	}
}