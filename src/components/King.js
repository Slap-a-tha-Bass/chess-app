import React from "react";
import {
  CenterChessPiece,
  KingBottom,
  KingCross1,
  KingCross2,
  KingHeadLeft,
  KingHeadMiddle,
  KingHeadRight,
  KingStripeBottom,
  KingStripeTop,
} from "../styles/ChessPieces";

const King = ({ kingColor, stripeColor, borderColor }) => {
  return (
    <CenterChessPiece>
      <KingHeadLeft bgcolor={kingColor} borderColor={borderColor} />
      <KingHeadRight bgcolor={kingColor} borderColor={borderColor} />
      <KingHeadMiddle bgcolor={kingColor} borderColor={borderColor} />
      <KingCross1 bgcolor={kingColor} />
      <KingCross2 bgcolor={kingColor} />
      <KingBottom bgcolor={kingColor} borderColor={borderColor} />
      <KingStripeTop bgcolor={stripeColor} />
      <KingStripeBottom bgcolor={stripeColor} />
    </CenterChessPiece>
  );
};

export default King;
