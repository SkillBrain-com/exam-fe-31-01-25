import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./AddNotes.css";

const AddNotes = () => {
  const [notes, setNotes] = useState([]); 

  const handleAddNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]); 
  };

  return (
    <div className="container">
    <h1>Aplicație de Notițe</h1>
    <AddNote onAddNote={handleAddNote} />
    <NoteList notes={notes} />
  </div>
  );
};

export default AddNotes;
