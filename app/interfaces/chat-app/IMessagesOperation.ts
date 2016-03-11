import { Message } from '../../models/chat-app.model';

export interface IMessagesOperation extends Function {
	(message: Message[]): Message[];
}