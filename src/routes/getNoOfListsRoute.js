import { getAllLists } from "../db";

export const getNoOfListsRoute = {
    method: 'get',
    path: '/listsNo/:date/:userId',
    handler: async (req, res) => {
        const date = req.params.date;
        const userId = req.params.userId;

        const lists = await getAllLists();              


        //taking only the date,month & year into a variable in order to compare with the date from the database
        const formattedDate = date.slice(0, 10);

        const matchingItems = lists.filter(item => item.setDate.toString().slice(0, 10) === formattedDate && item.userId === userId
    );

    console.log(matchingItems);
    res.status(200).json(matchingItems.length.toString());
        
      
    }
}