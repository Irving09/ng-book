import { Injectable, bind } from 'angular2/core';
import { Subject, BehaviorSubject } from 'rxjs';

import { User } from '../../models/chat-app/user.model';

@Injectable()
export class UserService {
	currentUser: Subject<User> = new BehaviorSubject<User>(null);

	public setCurrentUser(newUser: User): void {
		this.currentUser.next(newUser);
	}
}

export var UserServiceInjectables: Array<any> = [
	bind(UserService).toClass(UserService)
];