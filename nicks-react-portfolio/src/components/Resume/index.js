import React from 'react';
import myResume from '../../assets/images/myResume.png';

function Resume() {
  return (
    <section>
      <h1 id="resume">My Resume</h1>
      <embed
        src={myResume}
        alt="Nicks-Resume"
        style={{ height: '150vh', width: '55vw' }}
      ></embed>
    </section>
  );
}

export default Resume;
