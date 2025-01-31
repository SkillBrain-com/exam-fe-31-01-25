import React, { useState } from "react";
import AddNoteTemplate from "./AddNoteTemplate"; // Importă formularul pentru adăugarea notiței
import NoteList from "./NoteList"; // Importă componenta NoteList

function AddNote() {
  const [notes, setNotes] = useState([]); // State pentru a stoca notițele

  const handleAddNote = (title, content) => {
    const newNote = { title, content };
    setNotes([...notes, newNote]); // Adaugă notița la lista de notițe
  };

  return (
    <div>
      <AddNoteTemplate onAddNote={handleAddNote} />{" "}
      {/* Afișează formularul de adăugare a notiței */}
      <NoteList notes={notes} /> {/* Afișează lista de notițe */}
    </div>
  );
}

export default AddNote;
