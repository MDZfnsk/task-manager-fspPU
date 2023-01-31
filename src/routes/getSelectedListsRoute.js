import { getAllLists } from '../db';




export const getSelectedListsRoute = {
    method: 'get',    
    path: '/lists/:date/:userId',
    handler: async (req, res) => {
        
        const date = req.params.date;
        const userId = req.params.userId;

        console.log(date);
        console.log(userId);
        const formattedDate = date.slice(0, 10);
        console.log(formattedDate);

    const lists = await getAllLists();      
    const matchingItems = lists.filter(item => item.setDate.toString().slice(0, 10) === formattedDate && item.userId === userId
    );

    console.log(matchingItems);
    res.status(200).json(matchingItems);
        

    }
}



