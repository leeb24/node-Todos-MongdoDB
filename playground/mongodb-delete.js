const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
   db.collection('Todos').findOneAndDelete({task:'eating'}).then((result)=>{
       console.log(result);
   },(err)=>{
       
   });

    //db.close();//closes connection
    
});//URL - where database lives(which db) , callback 
