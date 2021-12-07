import React from "react";
import {
  CenterChessPiece,
  RookBottom,
  RookBottomBehind,
  RookMiddle,
  RookTop,
  RookTopBehind,
} from "../styles/ChessPieces";

const Rook = ({ rookColor, borderColor }) => {
  return (
    <CenterChessPiece>
      <RookMiddle bgcolor={rookColor} borderColor={borderColor} />
      <RookBottomBehind borderColor={borderColor} />
      <RookBottom bgcolor={rookColor} />
      <RookTopBehind borderColor={borderColor} />
      <RookTop bgcolor={rookColor} />
    </CenterChessPiece>
  );
};

export default Rook;
