import React from "react";
import {
  CenterChessPiece,
  QueenFarLeftTriangle,
  QueenMiddleLeftTriangle,
  QueenFarRightTriangle,
  QueenMiddleRightTriangle,
  QueenMiddleTriangle,
  QueenBottom,
  QueenStripeBottom,
  QueenFarLeftTriangleBehind,
  QueenMiddleLeftTriangleBehind,
  QueenFarRightTriangleBehind,
  QueenMiddleRightTriangleBehind,
  QueenMiddleTriangleBehind,
} from "../styles/ChessPieces";

const Queen = ({ queenColor, stripeColor, borderColor }) => {
  return (
    <CenterChessPiece>
      <QueenMiddleLeftTriangleBehind borderColor={borderColor} />
      <QueenMiddleLeftTriangle bgcolor={queenColor} />
      <QueenMiddleRightTriangleBehind borderColor={borderColor} />
      <QueenMiddleRightTriangle bgcolor={queenColor} />
      <QueenBottom bgcolor={queenColor} borderColor={borderColor} />
      <QueenFarRightTriangleBehind borderColor={borderColor} />
      <QueenFarRightTriangle bgcolor={queenColor} />
      <QueenFarLeftTriangleBehind borderColor={borderColor} />
      <QueenFarLeftTriangle bgcolor={queenColor} />
      <QueenStripeBottom bgcolor={stripeColor} />
      <QueenMiddleTriangleBehind borderColor={borderColor} />
      <QueenMiddleTriangle bgcolor={queenColor} />
    </CenterChessPiece>
  );
};

export default Queen;
