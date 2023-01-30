import { markCompleteTask, getAllTasks } from '../db';



export const markCompletedTaskRoute = {
    method: 'patch',
    path: '/taskComplete/:taskId',
    handler: async (req, res) => {
        const taskId = req.params.taskId;
        const status = req.body.status;
        
        await markCompleteTask(taskId,status);
        
        const tasks = await getAllTasks();
        res.status(200).json(tasks);

        //Tried to implement to send back the updated task back to the server
       
      
    }
}



