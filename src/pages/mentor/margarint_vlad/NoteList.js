import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes available. Add some!</p>
      ) : (
        notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))
      )}
    </div>
  );
}

export default NoteList;
