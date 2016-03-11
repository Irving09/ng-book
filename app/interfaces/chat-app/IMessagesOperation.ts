import { Message } from '../../models/chat-app/message.model';

export interface IMessagesOperation extends Function {
	(message: Message[]): Message[];
}