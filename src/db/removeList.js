import { ObjectId } from 'mongodb';
import { db } from './db';

export const removeList = async (id) => {
    
    const connection = db.getConnection();
    await connection.collection('lists').deleteOne({_id: ObjectId(id)});
    await connection.collection('tasks').deleteMany({_listId: id});
    
}