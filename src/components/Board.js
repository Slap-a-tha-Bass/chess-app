import React from "react";
import {
  BoardContainer,
  BoardRow,
  BoardSquare,
  Letter,
  LetterSquare,
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
      <BoardContainer>
        <BoardRow>
          <LetterSquare>
            <Letter>8</Letter>
          </LetterSquare>
          <BoardSquare id="a8" bgcolor="white">
            <Rook rookColor="black" borderColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="b8" bgcolor="rgb(75,75,75)">
            <Knight knightColor="black" faceColor="white" stripeColor="white" />
          </BoardSquare>
          <BoardSquare id="c8" bgcolor="white">
            <Bishop
              bishopColor="black"
              faceColor="white"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare id="d8" bgcolor="rgb(75,75,75)">
            <Queen
              queenColor="black"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare id="e8" bgcolor="white">
            <King kingColor="black" stripeColor="white" borderColor="white" />
          </BoardSquare>
          <BoardSquare id="f8" bgcolor="rgb(75,75,75)">
            <Bishop
              bishopColor="black"
              faceColor="white"
              stripeColor="white"
              borderColor="rgb(200,200,200)"
            />
          </BoardSquare>
          <BoardSquare id="g8" bgcolor="white">
            <Knight knightColor="black" faceColor="white" stripeColor="white" />
          </BoardSquare>
          <BoardSquare id="h8" bgcolor="rgb(75,75,75)">
            <Rook rookColor="black" borderColor="rgb(200,200,200)" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>7</Letter>
          </LetterSquare>
          <BoardSquare id="a7" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="b7" bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="c7" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="d7" bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="e7" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="f7" bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="g7" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
          <BoardSquare id="h7" bgcolor="white">
            <Pawn pawnColor="black" stripeColor="rgb(200,200,200)" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>6</Letter>
          </LetterSquare>
          <BoardSquare id="a6" bgcolor="white" />
          <BoardSquare id="b6" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="c6" bgcolor="white" />
          <BoardSquare id="d6" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="e6" bgcolor="white" />
          <BoardSquare id="f6" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="g6" bgcolor="white" />
          <BoardSquare id="h6" bgcolor="rgb(75,75,75)" />
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>5</Letter>
          </LetterSquare>
          <BoardSquare id="a5" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="b5" bgcolor="white" />
          <BoardSquare id="c5" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="d5" bgcolor="white" />
          <BoardSquare id="e5" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="f5" bgcolor="white" />
          <BoardSquare id="g5" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="h5" bgcolor="white" />
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>4</Letter>
          </LetterSquare>
          <BoardSquare id="a4" bgcolor="white" />
          <BoardSquare id="b4" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="c4" bgcolor="white" />
          <BoardSquare id="d4" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="e4" bgcolor="white" />
          <BoardSquare id="f4" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="g4" bgcolor="white" />
          <BoardSquare id="h4" bgcolor="rgb(75,75,75)" />
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>3</Letter>
          </LetterSquare>
          <BoardSquare id="a3" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="b3" bgcolor="white" />
          <BoardSquare id="c3" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="d3" bgcolor="white" />
          <BoardSquare id="e3" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="f3" bgcolor="white" />
          <BoardSquare id="g3" bgcolor="rgb(75,75,75)" />
          <BoardSquare id="h3" bgcolor="white" />
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>2</Letter>
          </LetterSquare>
          <BoardSquare id="a2" bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="b2" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="c2" bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="d2" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="e2" bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="f2" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="g2" bgcolor="white">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
          <BoardSquare id="h2" bgcolor="rgb(75,75,75)">
            <Pawn pawnColor="rgb(180,180,180)" stripeColor="black" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <LetterSquare>
            <Letter>1</Letter>
          </LetterSquare>
          <BoardSquare id="a1" bgcolor="rgb(75,75,75)">
            <Rook rookColor="rgb(180,180,180)" borderColor="black" />
          </BoardSquare>
          <BoardSquare id="b1" bgcolor="white">
            <Knight
              knightColor="rgb(180,180,180)"
              faceColor="black"
              stripeColor="black"
            />
          </BoardSquare>
          <BoardSquare id="c1" bgcolor="rgb(75,75,75)">
            <Bishop
              bishopColor="rgb(180,180,180)"
              faceColor="rgb(75,75,75)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare id="d1" bgcolor="white">
            <Queen
              queenColor="rgb(180,180,180)"
              stripeColor="rgb(75,75,75)"
              borderColor="rgb(75,75,75)"
            />
          </BoardSquare>
          <BoardSquare id="e1" bgcolor="rgb(75,75,75)">
            <King
              kingColor="rgb(180,180,180)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare id="f1" bgcolor="white">
            <Bishop
              bishopColor="rgb(180,180,180)"
              faceColor="rgb(75,75,75)"
              stripeColor="rgb(75,75,75)"
              borderColor="black"
            />
          </BoardSquare>
          <BoardSquare id="g1" bgcolor="rgb(75,75,75)">
            <Knight
              knightColor="rgb(180,180,180)"
              faceColor="black"
              stripeColor="black"
            />
          </BoardSquare>
          <BoardSquare id="h1" bgcolor="white">
            <Rook rookColor="rgb(180,180,180)" borderColor="black" />
          </BoardSquare>
        </BoardRow>
        <BoardRow>
          <LetterSquare />
          <LetterSquare>
            <Letter>A</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>B</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>C</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>D</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>E</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>F</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>G</Letter>
          </LetterSquare>
          <LetterSquare>
            <Letter>H</Letter>
          </LetterSquare>
        </BoardRow>
      </BoardContainer>
    </>
  );
};

export default Board;
