import { db } from './db';
import { ObjectId } from 'mongodb';

export const getOneUser = async (id) => {
    
    const connection = db.getConnection();
    const result = await connection.collection('users').findOne({_id:ObjectId(id)});
    return result.userName;    
}