import { ObjectId } from 'mongodb';
import { db } from './db';

export const markCompleteTask = async (id,isCompleted) => {
    
    const connection = db.getConnection();
    await connection.collection('tasks').findOneAndUpdate({_id: ObjectId(id)},{$set: { isCompleted }});
}