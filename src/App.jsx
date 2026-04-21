import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "courses":
        return <Courses />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar setPage={setPage} />
      <div className="content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;