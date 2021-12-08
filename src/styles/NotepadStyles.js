import styled from "styled-components";

export const MoveNotepad = styled.div`
  position: relative;
  background-color: rgba(50, 50, 50, 0.7);
  color: whitesmoke;
  font-size: calc(1rem + 1.5vw);
  font-weight: 200;
  padding: calc(1rem + 1vw);
  margin: calc(1rem + 1vw);
  width: 75%;
`;
export const NotepadDiv = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  margin-top: 0;
`;
export const NotepadTitle = styled.span`
  display: flex;
  justify-content: center;
`;
export const NotePadNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(2rem + 1vw);
`;
export const NotepadNavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(1rem + 1vw);
  width: calc(3.5rem + 2vw);
  padding: calc(0.5rem + 1vw);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(50, 50, 50, 0.7);
  color: whitesmoke;
  font-size: calc(1rem + 1vw);
  &:hover {
    cursor: pointer;
    background-color: rgba(60, 60, 60, 0.9);
  }
`;
export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: calc(2 + 1vw);
  width: calc(3rem + 1vw);
  padding: calc(0.5rem + 1vw);
  margin: calc(0.5rem + 1vw);
  top: 50%;
  left: 0;
  border: 2px solid rgba(120, 120, 120, 0.9);
  border-radius: 20%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  background-color: rgba(120, 120, 120, 0.7);
  color: whitesmoke;
  font-size: calc(0.5rem + 1vw);
  &:hover {
    cursor: pointer;
    background-color: rgba(120, 120, 120, 0.9);
  }
`;
export const GithubButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: calc(2 + 1vw);
  width: calc(3rem + 1vw);
  padding: calc(0.5rem + 1vw);
  margin: calc(0.5rem + 1vw);
  top: 65%;
  left: 0;
  border: 2px solid rgba(120, 120, 120, 0.9);
  border-radius: 20%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  background-color: rgba(120, 120, 120, 0.7);
  color: whitesmoke;
  font-size: calc(0.5rem + 1vw);
  &:hover {
    cursor: pointer;
    background-color: rgba(120, 120, 120, 0.9);
  }
`;
