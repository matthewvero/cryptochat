const mongoose =  require("mongoose");

const messageSchema = new mongoose.Schema({
      uid: Number,
      userID: Number,
      roomID: Number,
      message: String,
      created_at: Date 
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message
