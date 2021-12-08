import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: calc(0.5rem + 1vw);
`;
export const NavBarButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(2rem + 1vw);
  width: calc(2rem + 1vw);
  background-color: rgba(120, 120, 120, 0.5);
  color: whitesmoke;
  font-size: calc(1rem + 1vw);
  font-weight: 200;
  margin-left: calc(2rem + 1vw);
  padding-left: calc(1.5rem + 1vw);
  padding-right: calc(1.5rem + 1vw);
  text-decoration: none;
  border-radius: 15%;
`;
