import React from "react";
import AddNote from "./AddNoteTemplate";
import NoteCard from "./NoteCard";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function Baidoc_Marius() {
  return (
    <div>
      <AddNote />
      <NoteCard title={initialNote.title} content={initialNote.content} />
    </div>
  );
}

export default Baidoc_Marius;
