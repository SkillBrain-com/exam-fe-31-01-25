import React, { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = (event) => {
    event.preventDefault(); 
    if (title.trim() && content.trim()) {
      onAddNote({ title, content }); 
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conținut"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Adaugă Notiță</button>
      </form>
    </div>
  );
};

export default AddNote;
