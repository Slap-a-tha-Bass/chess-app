import React from "react";
import {
  BishopTop,
  BishopBody,
  CenterChessPiece,
  BishopHat,
  BishopCross1,
  BishopCross2,
  BishopBottom,
  BishopStripeTop,
  BishopStripeBottom,
  BishopRobesLeft,
  BishopRobesRight,
  BishopTopBehind,
} from "../styles/ChessPieces";

const Bishop = ({ bishopColor, faceColor, stripeColor, borderColor }) => {
  return (
    <CenterChessPiece>
      <BishopTopBehind borderColor={borderColor} />
      <BishopHat bgcolor={bishopColor} />
      <BishopTop bgcolor={bishopColor} />
      <BishopBody bgcolor={bishopColor} />
      <BishopCross1 bgcolor={faceColor} />
      <BishopCross2 bgcolor={faceColor} />
      <BishopBottom bgcolor={bishopColor} />
      <BishopStripeTop bgcolor={stripeColor} />
      <BishopStripeBottom bgcolor={stripeColor} />
      <BishopRobesLeft bgcolor={bishopColor} borderColor={borderColor} />
      <BishopRobesRight bgcolor={bishopColor} borderColor={borderColor} />
    </CenterChessPiece>
  );
};

export default Bishop;
