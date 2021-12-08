import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  GithubButton,
  MoveNotepad,
  NotepadDiv,
  NotePadNavBar,
  NotepadNavButton,
  NotepadTitle,
  PlayButton,
} from "../styles/NotepadStyles";

const Notepad = ({ content, listMoves, moveCounter }) => {
  const handlePlayClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Just for CSS Fun!",
      icon: "info",
      iconColor: "blue",
      text: "I would love to make this app functional one day!",
      timer: 5000,
      showConfirmButton: false,
      background: "black",
      color: "white",
      position: "top",
    });
  };
  return (
    <>
      <MoveNotepad>
        <NotepadDiv>
          <NotepadTitle>Starry Knight Chess</NotepadTitle>
        </NotepadDiv>
        <NotePadNavBar>
          <Link to="/moves" style={{ textDecoration: "none" }}>
            <NotepadNavButton>Moves</NotepadNavButton>
          </Link>
          <Link to="/notes" style={{ textDecoration: "none" }}>
            <NotepadNavButton>Notes</NotepadNavButton>
          </Link>
          <Link to="/openings" style={{ textDecoration: "none" }}>
            <NotepadNavButton>Openings</NotepadNavButton>
          </Link>
        </NotePadNavBar>
        <NotepadDiv>{content ? content : <></>}</NotepadDiv>
        <NotepadDiv>
          <ul>
            <li style={{ listStyleType: "none" }}>
              {moveCounter ? moveCounter : <></>}{" "}
              {listMoves ? listMoves : <></>}
            </li>
          </ul>
        </NotepadDiv>
      </MoveNotepad>
      <PlayButton onClick={handlePlayClick}>Play</PlayButton>
      <GithubButton>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "whitesmoke" }}
          href="https://github.com/Slap-a-tha-Bass/chess-app"
        >
          Github Repo
        </a>
      </GithubButton>
    </>
  );
};

export default Notepad;
