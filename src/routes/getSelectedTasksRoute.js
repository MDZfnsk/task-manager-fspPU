import { getAllTasks } from '../db';


export const getSelectedTasksRoute = {
    method: 'get',
    path: '/tasks/:listId',
    handler: async (req, res) => {
        const listId = req.params.listId;
       
        const tasks = await getAllTasks(); 
       
        
        const matchingItems = tasks.filter(item => item._listId === listId);      
        res.status(200).json(matchingItems);
      
    }
}



