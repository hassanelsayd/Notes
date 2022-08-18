import React, { useState, useRef, useEffect } from "react";
import "./NoteCard.css";
import HR from "../global/HR";
const NoteCard = ({ name, text, date, id, isFav, isDone, bg, textColor }) => {
  const [cardText, setCardText] = useState(text);
  const [cardName, setCardName] = useState(name);
  const [editable, setEditable] = useState(false);
  const [spans, setSpans] = useState(1);
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.querySelector(".note-text textarea").style.height =
      cardRef.current.querySelector(".note-text textarea").scrollHeight + "px";
    let spans = cardRef.current.scrollHeight / 10;
    setSpans(spans.toFixed());
  }, []);
  const onDeleteNote = () => {
    let notes = JSON.parse(localStorage["notes"]);

    const checkRemoved = (note) => {
      return note.noteId !== id;
    };

    let filterd = notes.filter(checkRemoved);
    localStorage.setItem("notes", JSON.stringify(filterd));
    const rerender = new Event("rerender");
    document.body.dispatchEvent(rerender);
  };

  const onLoveNote = () => {
    let notes = JSON.parse(localStorage["notes"]);
    notes.map((note) => {
      note.noteId === id
        ? (note.isFavourite = !note.isFavourite)
        : console.log();
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    const rerender = new Event("rerender");
    document.body.dispatchEvent(rerender);
  };

  const onFinishNote = () => {
    const notes = JSON.parse(localStorage["notes"]);
    notes.map((note) => {
      note.noteId === id ? (note.isDone = !note.isDone) : console.log();
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    const rerender = new Event("rerender");
    document.body.dispatchEvent(rerender);
  };

  const onEditNote = () => {
    const notes = JSON.parse(localStorage["notes"]);
    notes.map((note) => {
      if (note.noteId === id) {
        note.name = cardName;
        note.text = cardText;
      } else {
        return;
      }

      localStorage.setItem("notes", JSON.stringify(notes));
      const rerender = new Event("rerender");
      document.body.dispatchEvent(rerender);
      setEditable(false);
    });
  };

  return (
    <div
      className="note-card"
      ref={cardRef}
      style={{ backgroundColor: bg, gridRowEnd: `${spans} span` }}
    >
      <div className="note-header">
        <div className="note-name">
          <input
            style={{ color: textColor }}
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            disabled={editable ? false : true}
          />
        </div>
        <div className="note-date">{date}</div>
        {editable && (
          <i
            onClick={onEditNote}
            style={{ color: textColor }}
            class="fa-solid fa-floppy-disk"
          ></i>
        )}
      </div>
      <HR />
      <div className="note-text">
        <textarea
          style={{ color: textColor }}
          type="text"
          value={cardText}
          onChange={(e) => {
            setCardText(e.target.value);
            // e.target.style.height = "5px";
            // e.target.style.height = e.target.scrollHeight + "px";

            cardRef.current.querySelector(".note-text textarea").style.height =
              cardRef.current.querySelector(".note-text textarea")
                .scrollHeight + "px";
            let spans = cardRef.current.scrollHeight / 10;
            setSpans(spans.toFixed());
          }}
          disabled={editable ? false : true}
        />
      </div>
      <HR />
      <div className="note-opts">
        <ul>
          <li
            onClick={onDeleteNote}
            style={{ color: textColor, borderColor: textColor }}
          >
            <i className="fa-solid fa-trash" />
          </li>
          <li
            onClick={() => setEditable(!editable)}
            style={{ color: textColor, borderColor: textColor }}
          >
            <i className="fa-solid fa-pen"></i>
          </li>
          <li
            onClick={onLoveNote}
            style={{ color: textColor, borderColor: textColor }}
            className={`${isFav ? "fav" : ""}`}
          >
            <i className="fa-solid fa-heart"></i>
          </li>
          <li
            onClick={onFinishNote}
            style={
              isDone
                ? { color: textColor }
                : { color: textColor, borderColor: textColor }
            }
            className={`${isDone ? "done" : ""}`}
          >
            <i className="fa-solid fa-check"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoteCard;
