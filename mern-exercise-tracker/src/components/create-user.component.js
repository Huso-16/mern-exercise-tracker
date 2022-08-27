import React from 'react';
import axios from 'axios';

/**
 * Component to Add user
 */
export default class CreateUser extends React.Component {
  /**
   * Component constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();

    // binding methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    };
  }

  /**
   * Update state of username
   * @param {Element} e
   */
  onChangeUsername(e) {
    this.setState({username: e.target.value});
  }

  /**
   * Perform action on form submission
   * @param {Element} e
   */
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    // TODO: submit the user details to the database
    console.log(user);

    // Send user data to backend
    axios.post('http://localhost:5000/users/add', user)
        .then((res) => {
          alert(res.data);
          console.log(res.data);
        }).catch((error) => console.error(error));

    // clear the form on form submission
    this.setState({username: ''});
  }

  /**
    * Component responsible to add new users.
    * @return {React.ReactNode} component responsible for add new user
    */
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername} />
          </div>

          <div className='form-group'>
            <input type="submit"
              className='btn btn-primary'
              value="Create User" />
          </div>
        </form>
      </div>
    );
  }
}
