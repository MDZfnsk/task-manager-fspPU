import { db } from './db';

export const addNewList = async (newList) => {
    const connection = db.getConnection();
    await connection.collection('lists').insertOne(newList);
}