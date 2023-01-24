import { addNewList,getAllLists } from '../db';

export const addListRoute = {
    method: 'post',
    path: '/lists',
    handler: async (req, res) => {
        const newListItem = req.body;
        await addNewList(newListItem);
        const updatedListItems = await getAllLists();
        res.status(200).json(updatedListItems);
    },
}