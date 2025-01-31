import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";
import "./notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <AddNote addNewNote={addNewNote} />
      <div className="notes-container">
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <NoteCard title={note.title} content={note.content} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
