const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://linh:linh@cluster0-xbfsl.gcp.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('user', userSchema);

// /api/users
router.get('/users', (req, res) => {
  console.log('get users');
  User.find({}, (err, users) => {
    console.log(users);
    res.json(users)
  })
})

router.get('/users/:id', (req, res) => {
  console.log('get user')
  const { id } = req.params
  User.find({ _id: id }, (err, user) => {
    console.log(user);
    res.json(user)
  })
})

router.post('/users', (req, res) => {
  const { username, password } = req.body
  console.log('post users');
  console.log({ username, password });

  const linh = new User({ username, password });
  linh.save((err) => {
    if (err) {
      throw err
    }

    res.json({ result: 'success' })

    console.log('User saved successfully!');
  })
})

router.delete('/users/:id', (req, res) => {
  const { id } = req.params
  User.findByIdAndRemove({ _id: id }, (err) => {
    if (err) throw err;
    console.log("User deleted");
    // res.json(user)
  })
})

router.put('/users/:id', (req, res) => {
  const { id, username } = req.params
  User.findByIdAndUpdate({ _id: id }, { username }, (err, user) => {
    if (err) throw err;
    console.log(user);
    res.json(user);
  })
})
module.exports = router;
