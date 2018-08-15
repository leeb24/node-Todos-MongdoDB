var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')
// mongodb://test:dlqudtjf24@ds119422.mlab.com:19422/test-todo-db
//DB 
module.exports = {
  mongoose: mongoose
}
