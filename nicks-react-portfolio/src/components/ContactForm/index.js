//import React from 'react';
//import validateEmail from '../../utils/helper';
//import { Row, Col } from 'react-bootstrap';
//import Resume from './assets/images/resume.pdf';

import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;

/*function ContactForm() {
  return (
    <section>
      <h1 data-testid="h1tag" className="contact">
        contact me
      </h1>

      <div className="contact-icons">
        <Row>
          <Col lg={3} md={12}>
            <a href="https://github.com/nichojohnson84">
              <img
                src="https://img.icons8.com/doodle/100/000000/github--v1.png"
                alt="github-logo"
                class="icon"
              />
            </a>
            <p class="icon-text">github</p>
          </Col>

          <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/nick-johnson-6490911a4/">
              <img
                src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png"
                alt="linkedin-logo"
                class="icon"
              />
            </a>
            <p class="icon-text">linkedin</p>
          </Col>

          <Col lg={3} md={12}>
            <a href="mailto:nickcjohnson84@outlook.com">
              <img
                src="https://img.icons8.com/doodle/120/000000/new-post.png"
                alt="mail-logo"
              />
            </a>
            <p class="icon-text">email</p>
          </Col>

          <Col lg={3} md={12}>
            <a href={Resume} download>
              <img
                src="https://img.icons8.com/doodle/120/000000/pdf-2.png"
                alt="resume"
              />
            </a>
            <p class="icon-text">resume</p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ContactForm;*/
