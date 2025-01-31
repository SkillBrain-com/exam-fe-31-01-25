import React, { useState } from "react";
import AddNoteTemplate from "./AddNoteTemplate";
import NoteList from "./NoteList";

function AddNote() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (title, content) => {
    const newNote = { title, content };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <AddNoteTemplate onAddNote={handleAddNote} /> {}
      <NoteList notes={notes} /> {}
    </div>
  );
}

export default AddNote;
