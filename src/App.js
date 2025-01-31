import React from "react";
import MyNotes from "./pages/tulbure_marius_george/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MyNotes />} />
          {/* Add your route here */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
