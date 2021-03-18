const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName :{ type: String, required: true, trim: true },
        lastName : { type: String, required: true, trim: true },
        username : { type: String, required: true, trim: true, unique: true },
        email : { type: String, required: true, trim: true, unique: true },
        password : { type: String, required: true },
        profilePic : {type: String, default:"/images/profile.jpeg"},
        likes: [{type:Schema.Types.ObjectId,ref:'post' }]
    }
)

var User = mongoose.model('user', userSchema);
module.exports = User;