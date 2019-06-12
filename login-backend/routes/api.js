const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://linh:linh@cluster0-xbfsl.gcp.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  email: String
});

const User = mongoose.model('user', userSchema);

// /api/users
router.get('/users', (req, res) => {
  try {
    console.log('get users');
    User.find({ role: "USER" }, (err, users) => {
      console.log(users);
      res.json(users)
    })
  } catch (error) {
    res.json(error)
  }

})

router.get('/users/:id', (req, res) => {
  try {
    console.log('get user')
    const { id } = req.params
    User.find({ _id: id }, (err, user) => {
      console.log(user);
      res.json(user)
    })
  } catch (error) {
    res.json(error)
  }

})

router.post('/users', (req, res) => {
  console.log('add new user api /users');
  try {
    const { username, password } = req.body
    console.log({ username, password });

    const user = new User({ username, password, role: "USER" });
    user.save((err, _user) => {
      if (err) {
        throw err
      }
      console.log(_user);

      res.json({ result: 'success', user: _user })

      console.log('User saved successfully!');
    })
  } catch (error) {
    res.json(error)
  }
})

router.delete('/users/:id', (req, res) => {
  try {
    console.log('delete: /users/:id');
    const { id } = req.params
    console.log(id);
    User.findByIdAndRemove({ _id: id }, (err) => {
      if (err) throw err;
      console.log("User deleted");
      // res.json(user)
    })
  } catch (error) {
    res.json()
  }
})

router.put('/users/:id', (req, res) => {
  try {
    console.log('put: /users/:id');
    const { id } = req.params;
    console.log(id);

    const updateValue = req.body
    console.log(updateValue)
    User.findOneAndUpdate({ _id: id }, updateValue, (err, user) => {
      if (err) throw err;
      console.log(user);
      res.json(user);
    })
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.post('/users/checkAuth', async (req, res) => {
  console.log('post(/users/checkAuth');
  try {
    const { username, password } = req.body
    console.log({ username, password })
    User.findOne({ username }, (err, user) => {
      if (user.password === password) {
        res.json({ result: true, user })
      } else {
        res.json({ result: false })
      }
    })
  } catch (error) {
    res.json(error)
  }
})


module.exports = router;
