import React from "react";
import NoteCard from "./NoteCard";

function AddNote({onAddNote}) {
  

  const handleSubmit = (e) => {
    // your code goes here
    e.preventDefault();
    onAddNote(
      {
        title: e.target[0].value, 
        content: e.target[1].value
      });
  };

  return (
    <form onSubmit={handleSubmit} className='add-note-form'>
      <input className='title-input' type='text' placeholder='Title' />
      <textarea className='content-input' placeholder='Content' />
      <button className='submit-button' type='submit'>
        Add Note
      </button>
    </form>
  );
}

export default AddNote;
