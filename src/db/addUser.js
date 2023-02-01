import { db } from './db';

export const addUser = async (newUser) => {
    const connection = db.getConnection();
    
    const result = await connection.collection('users').insertOne(newUser);  
    
    return result.insertedId.toString();
    
}