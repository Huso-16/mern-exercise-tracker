import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

/**
 * Functional react component,
 * responsible to show a row of data(exercise)
 *
 * @param {*} props local variable
 * @return {undefined}
 */
function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${props.exercise._id}`}>edit</Link>&nbsp;|&nbsp;
        <a href='#' onClick={() => {
          props.deleteExercise(props.exercise._id);
        } }>delete</a>
      </td>
    </tr>
  );
}

Exercise.propTypes = {
  exercise: PropTypes.any,
  deleteExercise: PropTypes.func,
};

/**
 * Component to show list of all exercise
 */
export default class ExerciseList extends React.Component {
  /**
   * Component constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // binding methods
    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []};
  }

  /**
   * Override component lifecycle method,
   * fetches data from the database
   * and saves data in the local state
   */
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
        .then((response) => {
          if (response.data.length > 0) {
            this.setState({
              exercises: response.data,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }

  /**
   *
   * @param {string} id - object id of the exercise
   */
  deleteExercise(id) {
    // delete the exercise in the database
    axios.delete(`http://localhost:5000/exercises/${id}`)
        .then((res) => console.log(res.data));

    // Also remove the exercise from the local state
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }


  /**
   * Creates rows of the data list
   * @return {React.ReactNode}
   */
  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return <Exercise
        exercise={currentExercise}
        deleteExercise={this.deleteExercise}
        key={currentExercise._id} />;
    });
  }

  /**
    * Component to display list of all exercises.
    * @return {React.ReactNode} component responsible to show exercise
    */
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table table-striped'>
          <thead className='table-primary'>
            <tr>
              <td>Username</td>
              <td>Description</td>
              <td>Duration</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    );
  }
}
