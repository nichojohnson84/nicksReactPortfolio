import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap';

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

      <div class="resume-container">
        <Row>
          <Col lg={4} md={12}>
            <h2 class="resume">front-end technologies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Framework (Bootstrap, Materalize)</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL (mysql lite3, mysql2)</li>
              <li>NoSQL (MongoDB, Mongoose)</li>
              <li>API's (web, third-party, RESTful, server-side)</li>
              <li>Templating language (Handlebars)</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 class="education">my education</h2>
            <p>
              <span className="school-name">University of Utah EXTENSION</span>
              <br></br>
              Full Stack Boot Camp - Certification Pending
              <br></br>
              <br></br>
              <span className="school-name">Salt Lake Community College</span>
              <br></br>
              Currently Working toward finishing my Associate of Science Degree
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ContactForm;
