//err , client in V3
//get db by const db = client.db('ToDoApp);
//db.close => client.close
//._id contains time,machineID

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    
   /* db.collection('Todos').insertOne({
        task:'eating',
        Completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to Insert to DataBase',err);
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
    })*/
    
    /*db.collection('Users').insertOne({
        name:'Lee',
        age:25,
        location:'Boston'
    },(err,result)=>{
        if(err){
            return console.log('Unable to Insert to DataBase',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });*/
    
    db.close();//closes connection
    
});//URL - where database lives(which db) , callback 