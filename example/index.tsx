import { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

function Example() {
  const [state, setState] = useState({
    reactEmailWithPlaceholder: '',
    reactEmailWithoutPlaceholder: '',
    reactNumberWithPlaceholder: '',
    reactNumberWithoutPlaceholder: '',
    reactDateWithPlaceholder: '',
    reactDateWithoutPlaceholder: '',
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
    reactNumberWithPlaceholder,
    reactNumberWithoutPlaceholder,
    reactDateWithPlaceholder,
    reactDateWithoutPlaceholder,
    reactTextareaWithPlaceholder,
    reactTextareaWithoutPlaceholder
  } = state;

  return (
    <>
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

      <div className="form-group floating-label">
        <input
          type="number"
          id="react-number-with-placeholder"
          name="reactNumberWithPlaceholder"
          value={reactNumberWithPlaceholder}
          onChange={handleChange}
          className="form-control"
          placeholder="number"
        />
        <label htmlFor="react-number-with-placeholder">Number with placeholder</label>
      </div>

      <div className="form-group floating-label">
        <input
          type="number"
          id="react-number-without-placeholder"
          name="reactNumberWithoutPlaceholder"
          value={reactNumberWithoutPlaceholder}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="react-number-without-placeholder">
          Number without placeholder (needs placeholder hack)
        </label>
      </div>

      <div className="form-group floating-label">
        <input
          type="date"
          id="react-date-with-placeholder"
          name="reactDateWithPlaceholder"
          value={reactDateWithPlaceholder}
          onChange={handleChange}
          className="form-control"
          placeholder="date"
        />
        <label htmlFor="react-date-with-placeholder">Date with placeholder</label>
      </div>

      <div className="form-group floating-label">
        <input
          type="date"
          id="react-date-without-placeholder"
          name="reactDateWithoutPlaceholder"
          value={reactDateWithoutPlaceholder}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="react-date-without-placeholder">
          Date without placeholder (needs placeholder hack)
        </label>
      </div>
    </>
  );
}

ReactDOM.render(<Example />, document.getElementById('react-example'));
