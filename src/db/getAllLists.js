import { db } from './db';

export const getAllLists = async () => {
    const connection = db.getConnection();
    const allLists = connection.collection('lists').find({}).toArray();
    return allLists;
}