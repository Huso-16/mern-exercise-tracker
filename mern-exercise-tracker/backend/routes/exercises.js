import express from 'express';
import Exercise from '../models/exercise.model';

const ExercisesRouter = new express.Router();

// Get all exercises
ExercisesRouter.route('/').get((req, res) => {
  Exercise.find()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(400).json('Error: ' + err));
});

// Returns exercises of a user
ExercisesRouter.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
      .then((exercise) => res.json(exercise))
      .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete exercise
ExercisesRouter.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

// Update exercise
ExercisesRouter.route('/update/:id').post((req, res) => {
  Exercise.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
      })
      .then(() => res.json('Exercise updated!'))
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
