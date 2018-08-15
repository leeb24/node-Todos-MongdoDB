// IMPORTS
// sudo lsof -iTCP -sTCP:LISTEN -P
const _ = require('lodash')
var express = require('express')
var bodyParser = require('body-parser')

// LOCAL IMPORTS
var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/Todo')
var { User } = require('./models/User')
var {authenticate} = require('./middleware/authenticate')
const { ObjectID } = require('mongodb')

var app = express()
const port = process.env.PORT; // process.env.PORT
app.use(bodyParser.json())
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then(
    doc => {
      res.send(doc)
    },
    e => {
      res.status(400).send(e)
    }
  )
})

app.get('/todos', (req, res) => {
  Todo.find().then(
    result => {
      res.send({ result })
    },
    e => {
      res.status(400).send(e)
    }
  )
})

// GET /todos/12345  <= access by req.params obj
app.get('/todos/:id', (req, res) => {
  var id = req.params.id
  // valid id?
  if (!ObjectID.isValid(id)) {
    res.status(404).send()
  } else {
    Todo.find({
      _id: id
    }).then(
      todos => {
        if (!todos) {
          res.status(404).send()
        } else {
          res.send({ todos })
        }
      },
      e => {
        res.status(400).send()
      }
    )
  }
})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id
  if (!ObjectID.isValid(id)) {
    res.status(404).send()
  } else {
    Todo.remove({
      _id: id
    }).then(
      todos => {
        if (!todos) {
          res.status(404).send()
        } else {
          res.send({ todos })
        }
      },
      e => {
        res.status(400).send()
      }
    )
  }
})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id
  var body = _.pick(req.body, ['text', 'completed'])
  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.compeleted = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send()
      }
      res.send({ todo })
    })
    .catch(e => {
      res.status(400).send()
    })
})

/*var authenticate = (req,res,next) => {
    var token = req.header('x-auth');
    
    User.findByToken(token).then((user)=>{
        if(!user){
            return res.status(400).send();
        }
        
        req.user = user;
        req.token = token;
        next();
    }).catch((e)=>{
        res.status(400).send();
    });
};*/

app.get('/users/me',authenticate,(req,res)=>{
   res.send(req.user);
});

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password'])
  var user = new User(body)

  user
    .save()
    .then(() => {
      return user.generateAuthToken()
    })
    .then(token => {
      res.header('x-auth', token).send(user)
    })
    .catch(e => {
      res.status(400).send(e)
    })
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})

module.exports = { app }
