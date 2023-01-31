import { db } from './db';

export const getAllUsers = async () => {
    
    const connection = db.getConnection();
    const allUsers = connection.collection('users').find({}).toArray();
    return allUsers;
}