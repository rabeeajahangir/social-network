const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
 username: {
type: String,
unique: true,
required: "Username is required",
Trim: true
},

email: {
type: String,
required: "Email is required",
unique: true,
match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
},

thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
],

friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);


const User = model('User', UserSchema);


module.exports = User;




