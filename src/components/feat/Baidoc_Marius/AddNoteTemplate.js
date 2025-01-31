import React, { useState } from "react";
import NoteCard from "./NoteCard";
import './style.css';
 // Import the NoteCard component

function AddNoteTemplate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adds a new note
    setNotes([...notes, { title, content }]);
    // Reset input fields
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Notes</h1>
      
      <form onSubmit={handleSubmit} className='add-note-form'>
        <input
          className='title-input'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <textarea
          className='content-input'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
        />
        <button className='submit-button' type='submit'>
          Add Note
        </button>
      </form>
      <div className='notes'>
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default AddNoteTemplate;
