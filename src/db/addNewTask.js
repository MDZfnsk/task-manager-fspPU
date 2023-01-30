import { db } from './db';

export const addNewTask = async (newTask) => {
    const connection = db.getConnection();
    await connection.collection('tasks').insertOne(newTask);
}