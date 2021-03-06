const {Schema, model, Types} = require('mongoose')
const date = require('date-and-time');

const reactionSchema = new Schema({
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
        required: 'Your username is required!'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateVal => date.format(dateVal, 'ddd, MMM DD YYYY')
    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Text is required!',
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateVal => date.format(dateVal, `ddd, MMM DD, YYYY at hh:mm A`)
    },
    username: {
        type: String,
        required: 'Username is required!'
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;