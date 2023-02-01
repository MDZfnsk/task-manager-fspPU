
import { getAllTasks, removeTask } from "../db";

export const removeTaskRoute = {
    method:'delete',
    path:'/TaskRemove/:id',
    handler: async (req,res)  => {
        
        const {id} = req.params;
        
        await removeTask(id); 


        const updatedTaskItems = await getAllTasks();
        res.status(200).json(updatedTaskItems);
            

    }

}