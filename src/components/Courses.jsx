import React from "react";

function Courses() {
  const courses = [
    { name: "BSc Computer Science", description: "Dive into the world of technology and programming." },
    { name: "BCom", description: "Master the principles of commerce and business." },
    { name: "BA English", description: "Explore literature, language, and critical thinking." },
    { name: "MSc IT", description: "Advance your knowledge in Information Technology." }
  ];

  return (
    <div className="container mt-5 py-5">
      <h2 className="text-center mb-5 text-primary fw-bold">Our Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{course.name}</h5>
                <p className="card-text flex-grow-1">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Courses;