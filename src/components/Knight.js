import React from "react";
import {
  CenterChessPiece,
  KnightBack,
  KnightBackStripe,
  KnightBody,
  KnightBottom,
  KnightEarRight,
  KnightEyes,
  KnightHead,
  KnightHead2,
  KnightNose,
  KnightStripe,
} from "../styles/ChessPieces";

const Knight = ({ knightColor, faceColor, stripeColor }) => {
  return (
    <CenterChessPiece>
      <KnightHead bgcolor={knightColor} marginTop="0.5" marginLeft="-2" />
      <KnightHead2 bgcolor={knightColor} marginTop="0.5" marginLeft="-2" />
      <KnightEyes bgcolor={faceColor} marginTop="1.5" marginLeft="-2" />
      <KnightNose bgcolor={faceColor} marginTop="2.7" marginLeft="-3.7" />
      <KnightEarRight
        bgcolor={knightColor}
        marginTop="0.5"
        marginLeft="-0.75"
      />
      <KnightBack bgcolor={knightColor} marginTop="2.5" marginLeft="3" />
      <KnightBody bgcolor={knightColor} marginTop="4" marginLeft="3" />
      <KnightBackStripe
        bgcolor={knightColor}
        borderColor={stripeColor}
        marginTop="1"
        marginLeft="0.85"
      />
      <KnightBottom bgcolor={knightColor} marginTop="4.25" marginLeft="0.2" />
      <KnightStripe bgcolor={faceColor} marginTop="4.5" marginLeft="0.2" />
    </CenterChessPiece>
  );
};

export default Knight;
