import { getAllLists, removeList } from "../db";

export const removeListRoute = {
    method:'delete',
    path:'/listRemove/:id',
    handler: async (req,res)  => {
        const {id} = req.params;       
        await removeList(id);
        const updatedListItems = await getAllLists();
        res.status(200).json(updatedListItems);

    }

}