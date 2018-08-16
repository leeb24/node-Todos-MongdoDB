var {User} = require ('./../models/User');

var authenticate = (req,res,next) => {
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
};

module.exports = {authenticate};