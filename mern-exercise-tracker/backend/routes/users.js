import express from 'express';
import User from '../models/user.model';

const UsersRouter = new express.Router();

// Get all user
UsersRouter.route('/').get((req, res) => {
  User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json('Error: ' + err));
});

// Add new user
UsersRouter.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  newUser.save()
      .then(() => res.json('User added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

export default UsersRouter;
