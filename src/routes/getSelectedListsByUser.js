import { getAllLists } from '../db';




export const getSelectedListsByUser = {
    method: 'get',
    path: '/Ulists/:userId',
    handler: async (req, res) => {
        const userId = req.params.userId;
        console.log(userId);

        const lists = await getAllLists();      
        
        
       const matchingItems = lists.filter(item => item.userId === userId);
       res.status(200).json(matchingItems);        

    }
}



