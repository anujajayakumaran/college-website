import React from "react";
import collegeImg from "../assets/college.jpg";

function Home() {
  return (
    <div className="container text-center mt-5 py-5">
      <div className="hero-section">
        <h1 className="display-4 fw-bold text-primary mb-3">Welcome to AR College 🎓</h1>
        <p className="lead text-muted mb-4">Your future begins here. Discover excellence in education and innovation.</p>
        <img src={collegeImg} alt="CASM college" className="img-fluid rounded shadow mb-4" />
        <p className="text-secondary">Join a community dedicated to shaping tomorrow's leaders.</p>
      </div>
    </div>
  );
}

export default Home;