import React, { useEffect, useState } from "react";
import "./CreateNote.css";
import { useNavigate } from "react-router-dom";
import getRandom from "../Helper/RandomColor";

const CreateNote = () => {
  const date = new Date();
  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");
  const [message, setMessage] = useState("");
  const colors = getRandom();
  let navigate = useNavigate();
  useEffect(() => {
    const removeActive = (e) => {
      if (e.target.nodeName !== "INPUT") {
        document.querySelectorAll(".input").forEach((el) => {
          el.classList.remove("active");
        });
      }
    };

    document.body.addEventListener("click", removeActive);

    return () => {
      document.body.removeEventListener("click", removeActive);
    };
  }, []);

  const activateParent = (e) => {
    document.querySelectorAll(".input ").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.parentElement.classList.add("active");
  };

  const onSubmit = () => {
    if (noteName && noteText) {
      let note = {
        noteId: Date.now(),
        name: noteName,
        text: noteText,
        isFavourite: false,
        date: date.toDateString(),
        isDone: false,
        bg: colors.bg,
        textColr: colors.text,
      };
      let notes = [];
      if (localStorage.getItem("notes")) {
        notes = [...JSON.parse(localStorage.getItem("notes")), note];
      } else {
        notes = [note];
      }
      localStorage.setItem("notes", JSON.stringify(notes));
      navigate("/");
    }
  };

  return (
    <div className="create-note">
      <div className="container">
        <div className="header">Lets Create a new note !</div>
        <div className="input" onFocus={activateParent}>
          <input
            type="text"
            placeholder="Please Enter Note Name"
            value={noteName}
            onChange={(e) => {
              setNoteName(e.target.value);
            }}
          />
        </div>
        <div className="input" onFocus={activateParent}>
          <input
            type="text"
            placeholder="Please Enter Note text"
            value={noteText}
            onChange={(e) => {
              setNoteText(e.target.value);
            }}
          />
        </div>

        <div className="input">
          <input type="submit" value="Save Note!" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
export default CreateNote;
