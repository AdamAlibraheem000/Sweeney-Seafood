const { Schema, model } = require('mongoose');


const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: 'You need a comment!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        replies: [replySchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;