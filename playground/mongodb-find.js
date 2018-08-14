const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
    /*db.collection('Todos').find({
        _id: new ObjectID('5b69f580b78e0f071bf95530')
    }).toArray().then((docs)=>{
        
        console.log('ToDos');
        console.log(JSON.stringify(docs,undefined,2));
        
    },(err)=>{
        
        console.log('Unable fetch todos');
    });*/
    
    db.collection('Todos').find().count().then((count)=>{
        
        console.log(`ToDos count:${count}`);
        
    },(err)=>{
        
        console.log('Unable fetch todos');
    });
    
    //db.close();//closes connection
    
});//URL - where database lives(which db) , callback 
