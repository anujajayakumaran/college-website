import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo / Title */}
        <a className="navbar-brand" href="#" style={{ color: "white", fontWeight: "bold" }}>
          AR College
        </a>

        {/* Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link text-white"
                onClick={() => setPage("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link text-white"
                onClick={() => setPage("about")}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link text-white"
                onClick={() => setPage("courses")}
              >
                Courses
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link text-white"
                onClick={() => setPage("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;