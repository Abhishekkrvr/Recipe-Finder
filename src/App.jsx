import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Mealinfo from "./components/Mealinfo";

const App = () => {
  return (
    <div className="appLayout">
      {/* Main Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/:mealid" element={<Mealinfo />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made by Abhishek Verma</p>
        <div className="socialLinks">
          <a
            href="https://github.com/Abhishekkrvr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kr-verma-0942381b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
