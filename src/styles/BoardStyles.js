import styled from "styled-components";

export const BoardContainer = styled.div`
  position: absolute;
  width: 100vmax;
  height: 100vmax;
  margin-left: 3rem;
`;
export const BoardRow = styled.div`
  display: flex;
`;
export const BoardSquare = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  width: calc(4.75rem + 2vw);
  height: calc(4.75rem + 2vw);
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor || "lightblue"};
  }
`;
export const Letter = styled.span`
  font-size: 2rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  font-weight: 300;
  color: white;
`;
export const NumberDivVert = styled.div`
  position: absolute;
  width: 3rem;
  height: 53.5vmax;
`;
export const Number = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin-left: 1rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
  color: white;
`;
