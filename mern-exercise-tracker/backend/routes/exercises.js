import express from 'express';
import Exercise from '../models/exercise.model';

const ExercisesRouter = new express.Router();

// Get all exercises
ExercisesRouter.route('/').get((req, res) => {
  Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json('Error: ' + err));
});

// Add new exercise
ExercisesRouter.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({username, description, duration, date});
  newExercise.save()
      .then(() => res.json('Exercise added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

export default ExercisesRouter;
