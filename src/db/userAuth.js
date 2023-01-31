import { db } from './db';

export const userAuth = async (userName,password) => {
    
    const connection = db.getConnection();
    await connection.collection('users').findOne({ userName, password });
    
}