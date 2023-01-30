export interface Lists {
	_id: string,
	name: string,
	setDate: Date
}


export interface Tasks {
	_id: string,
	_listId: string,
	name: string,
	isCompleted: boolean
	
}