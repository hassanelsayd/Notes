import React from "react";
import "./CreateNoteCard.css";
import {
  handleCardHeader,
  handleCardBtn,
} from "../Helper/CreateNoteCardHelpers";
import { Link } from "react-router-dom";

const CreateNoteCard = ({ from }) => {
  return (
    <div className="create-note-card">
      <div className="card-header">{handleCardHeader(from)}</div>
      <div className="card-icon">
        <i className="fa-solid fa-note-sticky"></i>
      </div>
      <Link to={!from ? "/create-note" : "/"}>
        <button>{handleCardBtn(from)}</button>
      </Link>
    </div>
  );
};
export default CreateNoteCard;
