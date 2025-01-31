import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import Notes from "./pages/puscas_madalina/AddNotes";
import AddNotes from "./pages/orban_alessandra/AddNotes"; // Import componenta ta
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
          <Route path="/orban-alessandra" element={<AddNotes />} />{" "}
          {/* Ruta pentru componenta ta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
