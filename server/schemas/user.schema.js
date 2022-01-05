const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
      username: {type: String, unique: 'That username is taken'},
      email: {type: String, unique: 'There is already an account linked to that email.'},
      password: String,
      publicAddress: {type: String, unique: 'There is already an account linked to that address.'},
      nonce: Number,
      chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chat' }],
      friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
});

const User = mongoose.model('user', userSchema);

module.exports = User;