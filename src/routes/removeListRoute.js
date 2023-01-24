import { getAllLists, removeList } from "../db";

export const removeListRoute = {
    method:'delete',
    path:'/listRemove/:_id',
    handler: async (req,res)  => {
        const {id} = req.params;
        console.log(id);
        await removeList(id);
        const updatedListItems = await getAllLists();
        res.status(200).json(updatedListItems);

    }

}