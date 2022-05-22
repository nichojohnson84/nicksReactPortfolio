import React from 'react';
// import images from assets
import myImage from '../../assets/images/myImage.jpg';
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <center>
            <img src={myImage} className="myImage" alt="Nick-Profile" />
          </center>
          <p class="name">Nick Johnson</p>
          <p class="job">Account Manager and Aspiring Web Developer</p>
          <h2 class="education">Get to know me</h2>
          <p1>
            Hello, my name is Nick Johnson! I was born and raised in Salt Lake
            City, Utah. I graduated from Cottonwood High School in 2002. From
            there I have had all kinds of jobs but most of them centered around
            customer service. I have been working as an Account Manager at
            StubHub for almost 5 years now and I realized I wanted to make a
            change and challenge myself. I have always had an interest in web
            design and I love thinking about all of the pieces behind the scene
            that make it work. I have spent a lot of time on the phone with
            clients talking about what would make the website where I work
            better and always wished that I could be on that end of the issue
            where you fix things rather than just telling someone else what is
            wrong so they can fix it. I think this actually gives me an
            advantage having worked on the customer service side for so long.
            <br></br>
            <br></br>I had been going to school on and off for a long time
            because I love to learn but I also couldn't decide on a path to
            take. Like many others, I thought it might be too late. But I am
            about to graduate from a University of Utah Coding Bootcamp that has
            been one of the most challenging and satisfying experiences I have
            ever had. My goal is to put these skills along with the many others
            I have gained over 20 years in the workforce to use in a new career
            as a Web Developer. I take great pride in being a problem solver,
            building things, and helping people.
            <br></br>
            <br></br>
          </p1>
        </Col>
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
              <li>Framework (Bootstrap, Bulma)</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL (mysql, mysql2)</li>
              <li>NoSQL (MongoDB, Mongoose)</li>
              <li>API's (web, third-party, RESTful, server-side)</li>
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

export default About;
