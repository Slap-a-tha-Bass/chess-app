import React from "react";
import { Link } from "react-router-dom";
import {
  MoveNotepad,
  NotepadDiv,
  NotePadNavBar,
  NotepadNavButton,
  NotepadTitle,
} from "../styles/BackgroundLayout";

const Notepad = () => {
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
    </MoveNotepad>
  );
};

export default Notepad;
