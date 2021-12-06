import styled from "styled-components";

export const MoveNotepad = styled.div`
  position: absolute;
  background-color: rgba(50, 50, 50, 0.7);
  color: whitesmoke;
  font-size: calc(1rem + 1.5vw);
  font-weight: 200;
  width: 40vmax;
  height: 40vmax;
  margin-top: ${(props) => props.marginTop || 0}rem;
  left: 61%;
`;
export const NotepadDiv = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const NotepadTitle = styled.span`
  display: flex;
  justify-content: center;
`;
export const NotePadNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  height: 3rem;
  width: 30vmax;
`;
export const NotepadNavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 6rem;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(50, 50, 50, 0.7);
  color: whitesmoke;
  font-size: 1.5rem;
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
  height: 5rem;
  width: 8rem;
  padding: 1rem;
  margin: 1rem;
  top: 60%;
  left: 90%;
  border: 2px solid rgba(120, 120, 120, 0.9);
  border-radius: 20%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  background-color: rgba(120, 120, 120, 0.7);
  color: whitesmoke;
  font-size: 1.5rem;
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
  height: 5rem;
  width: 8rem;
  padding: 1rem;
  margin: 1rem;
  top: 75%;
  left: 90%;
  border: 2px solid rgba(120, 120, 120, 0.9);
  border-radius: 20%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  background-color: rgba(120, 120, 120, 0.7);
  color: whitesmoke;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(120, 120, 120, 0.9);
  }
`;
