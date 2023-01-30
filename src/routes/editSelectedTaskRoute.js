import { editTask, getAllTasks } from '../db';
import { ObjectId } from 'mongodb';


export const editSelectedTaskRoute = {
    method: 'patch',
    path: '/editTasks/:taskId',
    handler: async (req, res) => {
        const taskId = req.params.taskId;
        const name = req.body.name;
        
        await editTask(taskId,name);
        
        const tasks = await getAllTasks();
        res.status(200).json(tasks);

        //Tried to implement to send back the updated task back to the server
       
      
    }
}



