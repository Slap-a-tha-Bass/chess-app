import styled from "styled-components";
export const RootDiv = styled.div`
  display: block;
`
export const BoardContainer = styled.div`
  position: relative;
  display: block;
  width: 100vmax;
  height: 100vmax;
`;
export const BoardRow = styled.div`
  display: flex;
`;
export const BoardSquare = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  width: calc(2.5rem + 2vw);
  height: calc(2.5rem + 2vw);
  border: 1px solid black;
  padding: calc(0.5rem + 0.5vw);
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor || "lightblue"};
  }
`;
export const LetterSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  width: calc(2.5rem + 2vw);
  height: calc(2.5rem + 2vw);
  padding: calc(0.5rem + 0.5vw);
`;
export const Letter = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: white;
`;
