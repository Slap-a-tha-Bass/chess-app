import React from "react";
import { Link } from "react-router-dom";
import {
  MoveNotepad,
  NotepadDiv,
  NotePadNavBar,
  NotepadNavButton,
  NotepadTitle,
} from "../styles/BackgroundLayout";

const Notes = () => {
  return (
    <MoveNotepad marginLeft="60">
      <NotepadDiv>
        <NotepadTitle>Starry Knight Chess</NotepadTitle>
      </NotepadDiv>
      <NotePadNavBar>
        <Link to="/moves" style={{textDecoration: "none"}}>
          <NotepadNavButton>Moves</NotepadNavButton>
        </Link>
        <Link to="/notes" style={{textDecoration: "none"}}>
          <NotepadNavButton>Notes</NotepadNavButton>
        </Link>
        <Link to="/openings" style={{textDecoration: "none"}}>
          <NotepadNavButton>Openings</NotepadNavButton>
        </Link>
      </NotePadNavBar>
      <NotepadDiv>
        <span>
          Can't believe I am learning chess this fast. I will be beating Magnus
          in no time!
        </span>
      </NotepadDiv>
    </MoveNotepad>
  );
};

export default Notes;
