import 'dotenv/config';
import express, {json} from 'express';
import cors from 'cors';
import pkg from 'mongoose';
import ExercisesRouter from './routes/exercises';
import usersRouter from './routes/users';
const {connect, connection: _connection} = pkg;

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(json());

// Connection to DB
const uri = process.env.ATLAS_URI;
connect(uri, {useNewUrlParser: true});

const connection = _connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Enable/Register routes
app.use('/users', usersRouter);
app.use('/exercises', ExercisesRouter);

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
