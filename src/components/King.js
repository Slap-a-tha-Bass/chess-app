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
      <KingHeadLeft
        bgcolor={kingColor}
        borderColor={borderColor}
        marginTop="2"
        marginLeft="-3"
      />
      <KingHeadRight
        bgcolor={kingColor}
        borderColor={borderColor}
        marginTop="2"
        marginLeft="3"
      />
      <KingHeadMiddle
        bgcolor={kingColor}
        borderColor={borderColor}
        marginTop="1.5"
      />
      <KingCross1 bgcolor={kingColor} marginTop="0.6" />
      <KingCross2 bgcolor={kingColor} marginTop="1" />
      <KingBottom bgcolor={kingColor} borderColor={borderColor} marginTop="4" />
      <KingStripeTop bgcolor={stripeColor} marginTop="4.3" />
      <KingStripeBottom bgcolor={stripeColor} marginTop="4.8" />
    </CenterChessPiece>
  );
};

export default King;
