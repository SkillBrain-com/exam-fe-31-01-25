import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Baidoc_Marius from "./components/feat/Baidoc_Marius/AddNotes";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Note App</h1>
        <Routes>
          <Route path='/' element={<MentorNotes />} />
          {<Route path='/baidoc marius' element={<Baidoc_Marius />} />}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
