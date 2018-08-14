var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(' mongodb://test:dlqudtjf24@ds119422.mlab.com:19422/test-todo-db')
// mongodb://test:dlqudtjf24@ds119422.mlab.com:19422/test-todo-db
module.exports = {
  mongoose: mongoose
}
