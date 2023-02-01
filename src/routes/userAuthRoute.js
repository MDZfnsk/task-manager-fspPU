import { userAuth,getAllUsers } from "../db";

export const userAuthRoute = {
    method: 'post',
    path: '/users',
    handler: async (req,res) => {
        

        const uName = req.body.uName;
        const psw = req.body.psw;
       

        const users = await getAllUsers();
        
        let userExists = false;
        let authUserId;

        users.forEach(user => {    
            
           
            if(user.userName === uName && user.password === psw){
                console.log('Matched');
                userExists = true;
                authUserId = user._id.toString();
              }               
            
            
             })
             
             if(userExists) {
                res.send({status: 'Valid',userId: authUserId});      
            } else {
                res.send({status: 'Invalid'});
            }         
        
        

    }
}