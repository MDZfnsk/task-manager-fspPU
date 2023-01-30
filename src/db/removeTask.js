import { ObjectId } from 'mongodb';
import { db } from './db';

export const removeTask = async (id) => {
    
    const connection = db.getConnection();
    await connection.collection('tasks').deleteOne({_id: ObjectId(id)});
}