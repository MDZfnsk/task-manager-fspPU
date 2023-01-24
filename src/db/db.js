import { MongoClient } from "mongodb";

const DB_NAME = 'TaskManager';

export const db = {
    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url,{
            maxPoolSize: 10,
            useNewUrlParser: true,
        });
        this._dbClient = client;
        if(this._dbClient){
            console.log("Successfully Connected to MongoDB server")
        }
    },
    getConnection: function() {
        if(!this._dbClient){
            console.log('You need to call the connect function first');
            process.exit(1);
        }
        return this._dbClient.db(DB_NAME);
    }
}