const {Schema, Types} = require('mongoose');

const reactionSchema =  new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Text is required!',
        maxLength: 280
    },
    username: {
        type: String,
        required: 'Username is required!'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateVal => date.format(dateVal, 'ddd, MMM DD YYYY')
    },
})

module.exports = reactionSchema;