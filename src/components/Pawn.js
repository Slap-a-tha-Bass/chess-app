import React from "react";
import {
  CenterChessPiece,
  PawnBody,
  PawnBottom,
  PawnHead,
  PawnStripe,
  PawnStripe2
} from "../styles/ChessPieces";

const Pawn = ({ pawnColor, stripeColor }) => {
  return (
    <CenterChessPiece>
      <PawnHead bgcolor={pawnColor} />
      <PawnBody bgcolor={pawnColor} />
      <PawnBottom bgcolor={pawnColor} />
      <PawnStripe bgcolor={stripeColor} />
      <PawnStripe2 bgcolor={stripeColor} />
    </CenterChessPiece>
  );
};

export default Pawn;
