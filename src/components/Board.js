import React from "react";
import {
  BoardContainer,
  BoardRow,
  BoardSquare,
  Letter,
  NumberDivVert,
  Number,
} from "../styles/BoardStyles";
import Pawn from "./Pawn";

const Board = () => {
  return (
    <>
      <NumberDivVert>
        <Number marginTop="2">8</Number>
        <Number marginTop="4.5">7</Number>
        <Number marginTop="4">6</Number>
        <Number marginTop="4.5">5</Number>
        <Number marginTop="4.5">4</Number>
        <Number marginTop="4">3</Number>
        <Number marginTop="4">2</Number>
        <Number marginTop="4">1</Number>
      </NumberDivVert>
      <BoardContainer>
        <BoardRow>
          <BoardSquare bgcolor="white"></BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(200,200,200)" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
          <BoardSquare bgcolor="rgb(75,75,75)" />
          <BoardSquare bgcolor="white" />
        </BoardRow>
        <BoardRow>
          <Letter marginLeft="3">A</Letter>
          <Letter marginLeft="5">B</Letter>
          <Letter marginLeft="5.5">C</Letter>
          <Letter marginLeft="5.5">D</Letter>
          <Letter marginLeft="5">E</Letter>
          <Letter marginLeft="6">F</Letter>
          <Letter marginLeft="5">G</Letter>
          <Letter marginLeft="5.5">H</Letter>
        </BoardRow>
      </BoardContainer>
    </>
  );
};

export default Board;
