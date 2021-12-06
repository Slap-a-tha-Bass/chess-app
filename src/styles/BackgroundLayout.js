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
  margin-left: ${(props) => props.marginLeft || 0}rem;
`;
export const NotepadDiv = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
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
  height: 2rem;
  width: 6rem;
  padding: 1rem;
  background-color: rgba(50, 50, 50, 0.7);
  color: whitesmoke;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(60, 60, 60, 0.9);
  }
`;
