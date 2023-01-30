import { ObjectId } from 'mongodb';
import { db } from './db';

export const editTask = async (id,name) => {
    
    const connection = db.getConnection();
    await connection.collection('tasks').findOneAndUpdate({_id: ObjectId(id)},{$set: { name }});
}