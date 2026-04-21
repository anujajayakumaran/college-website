import React from "react";

function About() {
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4 text-primary fw-bold">About AR College</h2>
          <p className="lead text-center mb-4">CASM College is committed to providing quality education and building strong careers for our students.</p>
          <div className="card shadow-sm">
            <div className="card-body">
              <p>Founded with a vision to empower the next generation, AR College offers a diverse range of programs designed to meet the evolving needs of the industry. Our experienced faculty, state-of-the-art facilities, and focus on holistic development ensure that every student achieves their full potential.</p>
              <p>We believe in fostering innovation, critical thinking, and leadership skills that prepare our graduates to excel in their chosen fields and contribute meaningfully to society.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;