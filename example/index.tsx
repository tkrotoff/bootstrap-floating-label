import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

function Form() {
  const [state, setState] = useState({
    reactEmailWithPlaceholder: '',
    reactEmailWithoutPlaceholder: '',
    reactTextareaWithPlaceholder: '',
    reactTextareaWithoutPlaceholder: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const {
    reactEmailWithPlaceholder,
    reactEmailWithoutPlaceholder,
    reactTextareaWithPlaceholder,
    reactTextareaWithoutPlaceholder
  } = state;

  return (
    <form>
      <div className="form-group floating-label">
        <input
          type="email"
          id="react-email-with-placeholder"
          name="reactEmailWithPlaceholder"
          value={reactEmailWithPlaceholder}
          onChange={handleChange}
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
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="react-email-without-placeholder">Email without placeholder</label>
      </div>

      <div className="form-group floating-label">
        <textarea
          id="react-textarea-with-placeholder"
          name="reactTextareaWithPlaceholder"
          value={reactTextareaWithPlaceholder}
          onChange={handleChange}
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
          onChange={handleChange}
          className="form-control"
          rows={3}
        />
        <label htmlFor="react-textarea-without-placeholder">Textarea without placeholder</label>
      </div>
    </form>
  );
}

ReactDOM.render(<Form />, document.getElementById('react-form'));
