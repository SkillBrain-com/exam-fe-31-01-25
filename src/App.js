import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import Notes from "./pages/puscas_madalina/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          <Route path="/" element={<MentorNotes />} />
          <Route path="/puscas-madalina" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
