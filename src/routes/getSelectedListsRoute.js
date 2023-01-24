import { getAllLists } from '../db';




export const getSelectedListsRoute = {
    method: 'get',
    path: '/lists/:date',
    handler: async (req, res) => {
        const { date } = req.params;
        const lists = await getAllLists();        


        //taking only the date,month & year into a variable in order to compare with the date from the database
        const formattedDate = date.slice(0, 10);
        
       const matchingItems = lists.filter(item => item.setDate.toString().slice(0, 10) === formattedDate);
       res.status(200).json(matchingItems);        

    }
}



