import { getOneUser } from '../db';

export const getOneUserRoute = {
    method: 'get',
    path: '/users/:userId',
    handler: async (req, res) => {
        const userId = req.params.userId;        
        const result = await getOneUser(userId);
        res.status(200).json(result);
    },
};