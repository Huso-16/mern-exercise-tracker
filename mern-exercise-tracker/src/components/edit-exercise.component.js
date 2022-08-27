import React from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Component to Add exercise
 *
 * Wrapper functional component,
 * to get and pass url params in class component
 * @return {React.ReactNode}
 */
export default function EditExercise() {
  const {id} = useParams();

  return (
    <EditExerciseComponent id={id}></EditExerciseComponent>
  );
}

/**
 * Component to Add exercise
 */
class EditExerciseComponent extends React.Component {
  /**
   * Component constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();

    // binding methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  /**
   * Set initial local state
   */
  componentDidMount() {
    axios.get(`http://localhost:5000/exercises/${this.props.id}`)
        .then((response) => {
          console.log(response);

          this.setState({
            username: response.data.username,
            description: response.data.description,
            duration: response.data.duration,
            date: new Date(response.data.date),
          });
        }).catch((error) => console.error(error));


    axios.get('http://localhost:5000/users')
        .then((response) => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map((user) => user.username),
            });
          }
        }).catch((error) => console.error(error));
  }

  /**
   * Update state of username
   * @param {Element} e
   */
  onChangeUsername(e) {
    this.setState({username: e.target.value});
  }

  /**
   * Update state of description
   * @param {Element} e
   */
  onChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  /**
   * Update state of duration
   * @param {Element} e
   */
  onChangeDuration(e) {
    this.setState({duration: e.target.value});
  }

  /**
   * Update state of date
   * @param {Element} date
   */
  onChangeDate(date) {
    this.setState({date: date});
  }

  /**
   * Perform action on form submission
   * @param {Element} e
   */
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    // TODO: submit the exercise to the database
    console.log(exercise);

    // Send exercise data to backend
    axios.post(`http://localhost:5000/exercises/update/${this.props.id}`, exercise)
        .then((res) => console.log(res.data));

    // Redirect to home on successfully creating the exercise
    window.location = '/';
  }

  /**
   * Component responsible to add new exercise for a user.
   * @return {React.ReactNode} component responsible for add new Exercise
   */
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select ref={this.usernameRef}
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map((user) => {
                  return <option key={user} value={user}> {user} </option>;
                })
              }
            </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input type='text'
              required
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription} />
          </div>
          <div className='form-group'>
            <label>Duration (in minutes): </label>
            <input type='text' required
              className='form-control'
              value={this.state.duration}
              onChange={this.onChangeDuration} />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className='form-group'>
            <input type="submit"
              className='btn btn-primary'
              value="Edit Exercise Log" />
          </div>
        </form>
      </div>
    );
  }
}


EditExercise.propTypes = {
  id: PropTypes.string,
};

EditExerciseComponent.propTypes = {
  id: PropTypes.string,
};
