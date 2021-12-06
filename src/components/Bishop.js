import React from 'react';
import { BishopTop, BishopBody, CenterChessPiece, BishopHat, BishopCross1, BishopCross2, BishopBottom, BishopStripeTop, BishopStripeBottom, BishopRobesLeft, BishopRobesRight } from '../styles/ChessPieces';

const Bishop = ({bishopColor, faceColor, stripeColor, borderColor}) => {
    return (
        <CenterChessPiece>
            <BishopHat bgcolor={bishopColor} marginTop="0.5" />
            <BishopTop bgcolor={bishopColor} marginTop="0.7" />
            <BishopBody bgcolor={bishopColor} marginTop="1.7" />
            <BishopCross1 bgcolor={faceColor}  marginTop="1.6"/>
            <BishopCross2 bgcolor={faceColor}  marginTop="2"/>
            <BishopBottom bgcolor={bishopColor} marginTop="3.5" />
            <BishopStripeTop bgcolor={stripeColor} marginTop="3.5"/>
            <BishopStripeBottom bgcolor={stripeColor} marginTop="4"/>
            <BishopRobesLeft bgcolor={bishopColor} borderColor={borderColor} marginTop="5" marginLeft="-2"/>
            <BishopRobesRight bgcolor={bishopColor} borderColor={borderColor} marginTop="5" marginLeft="2"/>
        </CenterChessPiece>
    )
}

export default Bishop;
