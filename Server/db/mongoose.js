var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://test2:????.mlab.com:21332/heroku_ttk4gzzx')



module.exports = {
  mongoose: mongoose
}
