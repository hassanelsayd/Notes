import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import CreateNoteCard from "./CreateNoteCard";
import { getFav, getDone, getNotes } from "../Helper/RenderNotes";
import "./NotesHolder.css";

const NotesHolder = ({ from }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (from === "fav") {
      setNotes(getFav());
    } else if (from === "done") {
      setNotes(getDone());
    } else {
      setNotes(getNotes());
    }
    document.body.addEventListener("rerender", () => {
      !from
        ? setNotes(getNotes())
        : from === "fav"
        ? setNotes(getFav())
        : setNotes(getDone());
    });
  }, [from]);

  const renderedNotes = notes.map((note) => {
    return (
      <NoteCard
        key={note.noteId}
        id={note.noteId}
        name={note.name}
        text={note.text}
        date={note.date}
        isFav={note.isFavourite}
        isDone={note.isDone}
        bg={note.bg}
        textColor={note.textColr}
      />
    );
  });

  return (
    <div className="container">
      <h3>
        {from === "fav"
          ? "Your favourite notes"
          : from === "done"
          ? "Your finished notes"
          : "Your notes"}
      </h3>
      <div className="notes-holder">
        {notes.length === 0 ? <CreateNoteCard from={from} /> : renderedNotes}
      </div>
    </div>
  );
};
export default NotesHolder;
