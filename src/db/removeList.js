import { db } from './db';

export const removeList = async (id) => {
    const connection = db.getConnection();
    await connection.collection('lists').deleteOne({_id: id});
}