import React, {useState} from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function MyNotes() {
    const [notes, setNotes] = useState([]);
    const addNote = (newState) => {
        setNotes([...notes, newState]);
    }
  return (
    <div>
      <AddNote onAddNote={addNote} />
      <NoteCard title={initialNote.title} content={initialNote.content} />
      {
        notes.map((note, idx) => <NoteCard key={idx} title={note.title} content={note.content}></NoteCard>)
      }
    </div>
  );
}

export default MyNotes;
