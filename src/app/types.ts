export interface Lists {
	_id: string,
	name: string,
	setDate: Date,
	userId: string
}


export interface Tasks {
	_id: string,
	_listId: string,
	name: string,
	isCompleted: boolean
	
}

export interface Users {
	_id: string,
	email: string,
	name: string,
	userName: string,
	password: string
}