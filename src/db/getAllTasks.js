import { db } from './db';

export const getAllTasks = async () => {
    
    const connection = db.getConnection();
    const allTasks = connection.collection('tasks').find({}).toArray();
    return allTasks;
}