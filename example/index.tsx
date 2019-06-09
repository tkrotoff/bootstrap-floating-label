import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class Form extends React.Component {
  state = {
    reactEmailWithPlaceholder: '',
    reactEmailWithoutPlaceholder: '',
    reactTextareaWithPlaceholder: '',
    reactTextareaWithoutPlaceholder: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      reactEmailWithPlaceholder,
      reactEmailWithoutPlaceholder,
      reactTextareaWithPlaceholder,
      reactTextareaWithoutPlaceholder
    } = this.state;

    return (
      <form>
        <div className="form-group floating-label">
          <input
            type="email"
            id="react-email-with-placeholder"
            name="reactEmailWithPlaceholder"
            value={reactEmailWithPlaceholder}
            onChange={this.handleChange}
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="react-email-with-placeholder">Email with placeholder</label>
        </div>

        <div className="form-group floating-label">
          <input
            type="email"
            id="react-email-without-placeholder"
            name="reactEmailWithoutPlaceholder"
            value={reactEmailWithoutPlaceholder}
            onChange={this.handleChange}
            className="form-control"
          />
          <label htmlFor="react-email-without-placeholder">Email without placeholder</label>
        </div>

        <div className="form-group floating-label">
          <textarea
            id="react-textarea-with-placeholder"
            name="reactTextareaWithPlaceholder"
            value={reactTextareaWithPlaceholder}
            onChange={this.handleChange}
            className="form-control"
            rows={3}
            placeholder="Lorem ipsum dolor sit amet"
          />
          <label htmlFor="react-textarea-with-placeholder">Textarea with placeholder</label>
        </div>

        <div className="form-group floating-label">
          <textarea
            id="react-textarea-without-placeholder"
            name="reactTextareaWithoutPlaceholder"
            value={reactTextareaWithoutPlaceholder}
            onChange={this.handleChange}
            className="form-control"
            rows={3}
          />
          <label htmlFor="react-textarea-without-placeholder">Textarea without placeholder</label>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('react-form'));
