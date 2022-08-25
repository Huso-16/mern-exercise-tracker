import React from 'react';

/**
 * Component to Add exercise
 */
export default class CreateExercise extends React.Component {
  /**
   * Componenet constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

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
   * Set inital local state
   */
  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test username',
    });
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

    // Redirect to home on sucessful creating the exercise
    window.location = '/';
  }

  /**
   * Component responsible to add new exercise for a user.
   * @return {React.ReactNode} component responsible for add new Exerceise
   */
  render() {
    return (
      <div>
        <p>You are on Create Exercise component!</p>
      </div>
    );
  }
}
