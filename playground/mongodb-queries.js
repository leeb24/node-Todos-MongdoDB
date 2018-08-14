const {ObjectID} = require('mongodb');
const {mongoose} = require('./../Server/db/mongoose');
const {Todo}= require('./../Server/models/Todo');

var id ='5b6c5b8795551e11e9b8cd80';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');  
};

Todo.find({
    _id:id
}).then((todos)=>{
   console.log('Todos',todos) 
});

Todo.findOne({
    _id:id
}).then((todo)=>{
   console.log('Todos',todo) 
});

Todo.findById(id).then((todobyid)=>{
   console.log('Todo by id',todobyid) 
}).catch((e)=>{
    console.log('Invalid ID');
});