const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
      username: {type: String, unique: true},
      email: {type: String, unique: true},
      password: String,
      publicAddress: {type: String, unique: true},
      nonce: Number,
      chats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chat' }],
      friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'friendships'}]
});

const User = mongoose.model('user', userSchema);

module.exports = User;