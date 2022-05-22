import React from 'react';
import myResume from '../../assets/images/myResume.pdf';

function Resume() {
  return (
    <section>
      <h1 id="resume">My Resume</h1>
      <embed
        src={myResume}
        type="application/pdf"
        alt="Nicks-Resume"
        style={{ height: '85vh', width: '55vw' }}
      ></embed>
    </section>
  );
}

export default Resume;
