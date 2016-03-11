export class User {
	id: number;

	constructor(public name: string, public avatarSrc: string) {
		this.id = this.uuid();
	}

	uuid(): number {
		return 123;
	}
}