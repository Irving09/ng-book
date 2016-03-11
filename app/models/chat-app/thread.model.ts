import { Message } from './message.model';

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