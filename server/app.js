const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schemas/user.schema');
const path = require("path");
const Friendship = require('./schemas/friendship.schema');

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://mattavero:${process.env.mongoPassword}@cluster0.9fwiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

app.get('/user/:publicAddress', async (req, res) => {
  const publicAddress = req.params.publicAddress;
  const userProfile = await User.findOne({publicAddress: publicAddress}).populate('friends');
  if(userProfile) {
    res.send(userProfile);
  } else {
    res.send(false);
  }
  
})

app.get('/user/search/:userName', async (req, res) => {
  try {
    const userProfile = await User.findOne({username: req.params.userName})
    if(userProfile){
      res.send(userProfile)
    } else {
      res.send({})
    }
  } catch (err) {
    res.sendStatus(500);
  }

})

app.post('/user/add', async (req, res) => {
  
  const {userID, friendID} = req.body;
  console.log(userID, friendID)
  try {
    const friendship = new Friendship({friend1: userID, friend2: friendID, created_at: new Date().toDateString()});
    const friendshipDoc = await friendship.save();
    const userUpdate = await User.updateMany({_id: [userID, friendID]}, {$push: {friends: friendshipDoc._id}});
    console.log(userUpdate);
    if(userUpdate.acknowledged) {
      res.sendStatus(200);
    }
  } catch (err) {
    res.status(418).send(err);
  }
  
  
  
  
})

app.post('/user/:publicAddress', async (req, res) => {
  const publicAddress = req.params.publicAddress;
  const username = req.body.username
  const userProfile = new User({publicAddress, username})
  try {
    const profile = await userProfile.save();
    res.send(profile);
  }
  catch (err) {
    res.send(err);
  }
  
})

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["messenger"],
    credentials: true
  }
});

io.use(async (socket, next) => {
  const userID = socket.handshake.auth.userID;
  
  if (!userID) {
    return next(new Error('No userID'))
  }
  socket.userID = userID;
  const userProfile = await User.findOne({_id: userID});
  socket.username = userProfile.username;
  next();
})

io.on('connection', (socket) => {
});



server.listen(5000, () => {
  console.log('listening on *:5000');
});

