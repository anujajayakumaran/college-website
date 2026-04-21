import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">AR College</h5>
            <p className="mb-0">Empowering minds, shaping futures</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h6>Contact Us</h6>
            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>casmcollege@gmail.com</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+91 9876543210</p>
            <p className="mb-0"><i className="bi bi-geo-alt-fill me-2"></i>AR College Campus, City, State, PIN</p>
          </div>
        </div>
        <hr className="my-3" />
        <p className="mb-0 text-center">© 2026 AR College | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;