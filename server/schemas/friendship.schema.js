const mongoose =  require("mongoose");

const friendshipSchema = new mongoose.Schema({
      friend1: String,
      friend2: String,
      status: {
            type: String,
            enum: ['requested', 'friends'],
            default: 'requested'
      },
      created_at: Date 
});

const Friendship = mongoose.model('friendships', friendshipSchema);

module.exports = Friendship
