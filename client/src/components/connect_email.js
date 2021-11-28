const nodemailer = require('nodemailer');
const mongoose = require("mongoose");
const schema = require(__dirname + "/NeverLateModel.js");
mongoose.connect('mongodb+srv://Anil:Bhusal@cluster0.kjwlj.mongodb.net/NeverLate?');
const getNeverLateSchema = NeverLateModel.neverLateSchema();
const NeverLate = new mongoose.model("neverlate", getNeverLateSchema);
NeverLate.findOne({email:"bhusalanil121@gmail.com"}, function(err, foundUser){console.log(foundUser)})


const tranporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:'latenever294@gmail.com',
        pass:'12qwaszxQWASZX'
    }
})

function sendRejectEmail(email, name){
    const options = {

        from: 'latenever294@gmail.com',
        to:email,
        subject:'reminder',
        text:'double check your assignment '
    };
    
    tranporter.sendMail(options, function(err,info){
        if(err){
            console.log(err);
            return;
        }
        console.log("sent : "+ info.response);
    })
}
