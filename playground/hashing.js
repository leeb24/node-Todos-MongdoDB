const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

/*bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    });
});*/

var hashedpassword = '$2a$10$j2H5wPrXKS1a9X/m6OlRa.0rKDyYtXQnQdK8trVgnSa3QZFP1zxVe';

bcrypt.compare(password,hashedpassword,(err,res)=>{
    console.log(res);
});

/*var data = {
    id: 10
}



var token = jwt.sign(data,'123abc');
console.log(token);
var decoded = jwt.verify(token,'123abc')
console.log(decoded);*/
/*var msg = 'Im user number3';

var hash = SHA256(msg).toString();

console.log(`hash is : ${hash}`);

var data = {
    id: 5
}

var token= {
    data,
    hash: SHA256(JSON.stringify(data)+'SALTING DATA').toString() //SALTING THE HASH
}


var resultinghash = SHA256(JSON.stringify(token.data +'SALTING DATA')).toString();

if(resultinghash === token.hash){
    //DATA NOT TOUCHED
}
else{
    //DATA CORRUPTED
}*/