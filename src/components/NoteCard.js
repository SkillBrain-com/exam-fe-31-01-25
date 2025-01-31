import React from "react";

const NoteCard = ({ title, content }) => {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;
