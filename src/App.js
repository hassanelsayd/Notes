import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import NotesHolder from "./components/NotesHolder";
import CreateNote from "./components/CreateNote";
import "./global/normalize.css";
import "./global/config.css";
import "./global/animations.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", []);
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NotesHolder />} exact />
          <Route path="/fav" element={<NotesHolder from="fav" />} exact />
          <Route path="/done" element={<NotesHolder from="done" />} exact />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
