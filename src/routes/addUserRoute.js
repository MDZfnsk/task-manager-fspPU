import { addUser } from '../db';

export const addUserRoute = {
    method: 'post',
    path: '/addUser',
    handler: async (req, res) => {
        const newUser = req.body;  

        const insertedUser = await addUser(newUser);
        res.status(200).json(insertedUser);        
        
        
    },
}