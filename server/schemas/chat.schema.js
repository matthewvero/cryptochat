const mongoose =  require("mongoose");
const User = require('./user.schema')
const chatSchema = new mongoose.Schema({
      members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
      message: String,
      created_at: Date,
      updated_at: Date,
      admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
});

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;

