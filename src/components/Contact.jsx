import React from "react";

function Contact() {
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="text-center mb-4 text-primary fw-bold">Contact Us</h2>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <h5 className="text-primary"><i className="bi bi-envelope-fill me-2"></i>Email</h5>
                <p className="mb-0">casmcollege@gmail.com</p>
              </div>
              <div className="mb-3">
                <h5 className="text-primary"><i className="bi bi-telephone-fill me-2"></i>Phone</h5>
                <p className="mb-0">+91 9876543210</p>
              </div>
              <div className="mb-3">
                <h5 className="text-primary"><i className="bi bi-geo-alt-fill me-2"></i>Address</h5>
                <p className="mb-0">AR College Campus, City, State, PIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;