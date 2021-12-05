import styled from "styled-components";

export const PawnHead = styled.div`
  position: absolute;
  background-color: ${(props) => (props.bgcolor || 'red')};
  border-radius: 25px;
  border: 2px solid black;
  height: 1rem;
  width: 1rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const PawnBody = styled.div`
  position: absolute;
  background-color: ${(props) => (props.bgcolor || 'red')};
  border-radius: 25px;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const PawnBottom = styled.div`
  position: absolute;
  background-color: ${(props) => (props.bgcolor || 'red')};
  transform: translate(-50%, -50%);
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 3rem 3rem 0 0;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const CenterChessPiece = styled.div`
    display: flex;
    justify-content: center;
`
