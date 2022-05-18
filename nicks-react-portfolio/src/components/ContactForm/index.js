import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap';
import Resume from '../../assets/images/resume.pdf';

function ContactForm() {
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

export default ContactForm;
