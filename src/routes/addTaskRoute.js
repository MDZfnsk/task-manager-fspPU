import { addNewTask,getAllTasks } from '../db';

export const addTaskRoute = {
    method: 'post',
    path: '/addTask',
    handler: async (req, res) => {
        const newTaskItem = req.body;
        await addNewTask(newTaskItem);
        const updatedTaskItems = await getAllTasks();
        res.status(200).json(updatedTaskItems);
    },
}