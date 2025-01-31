import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NoteList from "./pages/tulbure_marius_george/AddNotes";


function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MentorNotes />} />
          {/* Add your route here */
          <Route path='tulbure-marius-george' element={<NoteList />}></Route>
          }
        </Routes>
      </div>
    </Router>
  );
}
export default App;
