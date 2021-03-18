const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        content: {type: String, required: true, trim: true},
        postedBy: {type: Schema.Types.ObjectId , ref: 'user' },
        pinned: Boolean,
        likes : [{type: Schema.Types.ObjectId, ref: 'user'}]
    }
    ,
    {timestamps: true}
);

var Post = mongoose.model('post', postSchema);
module.exports = Post;