import { getAllUsers } from '../db';

export const getAllUsersRoute = {
    method: 'get',
    path: '/users',
    handler: async (req, res) => {
        
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    },
};