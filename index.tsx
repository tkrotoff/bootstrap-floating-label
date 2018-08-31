import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <form>
        <div className="form-group">
          <input
            name="firstName"
            id="first-name"
            value={firstName}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="first-name">First Name</label>
        </div>

        <div className="form-group">
          <input
            name="lastName"
            id="last-name"
            value={lastName}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="last-name">Last Name</label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email</label>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('react-form'));
