import React from "react";
import {
  CenterChessPiece,
  PawnBody,
  PawnBottom,
  PawnHead,
  PawnStripe,
} from "../styles/ChessPieces";

const Pawn = ({ pawnColor, stripeColor }) => {
  return (
    <CenterChessPiece>
      <PawnHead bgcolor={pawnColor} marginTop="1.5" />
      <PawnBody bgcolor={pawnColor} marginTop="2.3" />
      <PawnBottom bgcolor={pawnColor} marginLeft="2.8" marginTop="4.5" />
      <PawnStripe bgcolor={stripeColor} marginTop="4.8" />
      <PawnStripe bgcolor={stripeColor} marginTop="5.1" />
    </CenterChessPiece>
  );
};

export default Pawn;
