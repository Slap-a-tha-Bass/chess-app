import React from "react";
import {
    CenterChessPiece,
    PawnBody,
    PawnBottom,
    PawnHead,
  } from "../styles/ChessPieces";

const Pawn = ({pawnColor}) => {
  return (
    <CenterChessPiece>
      <PawnHead bgcolor={pawnColor} marginTop="1.5" />
      <PawnBody bgcolor={pawnColor} marginTop="2.3" />
      <PawnBottom bgcolor={pawnColor} marginLeft="2.8" marginTop="4.5" />
    </CenterChessPiece>
  );
};

export default Pawn;
