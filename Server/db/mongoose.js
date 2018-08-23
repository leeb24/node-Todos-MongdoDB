var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://test2:dlqudtjf24@ds121332.mlab.com:21332/heroku_ttk4gzzx')

// mongodb://test:dlqudtjf24@ds119422.mlab.com:19422/test-todo-db
//mongodb://heroku_ttk4gzzx:3vujp9i4ksoh58g2mnlnmk7ghi@ds121332.mlab.com:21332/heroku_ttk4gzzx
//DB 
//'mongodb://localhost:27017/TodoApp
//mongodb://test:dlqudtjf24@ds121332.mlab.com:21332/heroku_ttk4gzzx

module.exports = {
  mongoose: mongoose
}
