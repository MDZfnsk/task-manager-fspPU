import { getAllLists } from '../db';




export const getSelectedListsRoute = {
    method: 'get',    
    path: '/lists/:date/:userId',
    handler: async (req, res) => {
        
        const date = req.params.date;
        const userId = req.params.userId;

        
        const formattedDate = date.slice(0, 10);
      

    const lists = await getAllLists();      
    const matchingItems = lists.filter(item => item.setDate.toString().slice(0, 10) === formattedDate && item.userId === userId
    );

    
    res.status(200).json(matchingItems);
        

    }
}



