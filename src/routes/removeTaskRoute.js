
import { removeTask } from "../db";

export const removeTaskRoute = {
    method:'delete',
    path:'/TaskRemove/:id',
    handler: async (req,res)  => {
        console.log("Came here");
        const {id} = req.params;
        console.log(id);
        await removeTask(id); 
        res.sendStatus(200);       

    }

}