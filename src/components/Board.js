import React from "react";
import {
  BoardContainer,
  BoardRow,
  BoardSquare,
  Letter,
  NumberDivVert,
  Number,
} from "../styles/BoardStyles";
import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Queen from "./Queen";
import Rook from "./Rook";

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
          <BoardSquare bgcolor="white">
            <Rook rookColor="black" borderColor="rgb(200,200,200)"/>
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Knight knightColor="black" faceColor="white" stripeColor="white" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Bishop
              bishopColor="black"
              faceColor="white"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Queen
              queenColor="black"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <King kingColor="black" stripeColor="white" borderColor="white" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Bishop
              bishopColor="black"
              faceColor="white"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Knight knightColor="black" faceColor="white" stripeColor="white" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Rook rookColor="black" borderColor="rgb(200,200,200)" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
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
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Rook rookColor="rgb(180,180,180)" borderColor="black" />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Knight
              knightColor="rgb(180,180,180)"
              faceColor="black"
              stripeColor="black"
            />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Bishop
              bishopColor="rgb(180,180,180)"
              faceColor="rgb(75,75,75)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Queen
              queenColor="rgb(180,180,180)"
              stripeColor="rgb(75,75,75)"
              borderColor="rgb(75,75,75)"
            />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <King
              kingColor="rgb(180,180,180)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare bgcolor="white">
            <Bishop
              bishopColor="rgb(180,180,180)"
              faceColor="rgb(75,75,75)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare bgcolor="rgb(75,75,75)">
            <Knight
              knightColor="rgb(180,180,180)"
              faceColor="black"
              stripeColor="black"
            />
          </BoardSquare>
          <BoardSquare bgcolor="white">
          <Rook rookColor="rgb(180,180,180)" borderColor="black" />
          </BoardSquare>
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
