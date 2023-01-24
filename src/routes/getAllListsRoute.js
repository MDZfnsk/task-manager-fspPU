import { getAllLists } from '../db';

export const getAllListsRoute = {
    method: 'get',
    path: '/lists',
    handler: async (req, res) => {
        const allLists = await getAllLists();
        res.status(200).json(allLists);
    },
};