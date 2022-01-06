const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schemas/user.schema');
const path = require("path");

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
  const userProfile = await User.findOne({publicAddress: publicAddress});
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
  const users = await User.find({_id: {$in: [userID, friendID]}});
  console.log(req.body)
  console.log(users)
  
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
    origin: "http://localhost:5000",
    methods: ["GET", "POST"],
    allowedHeaders: ["messenger"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg)
  });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});