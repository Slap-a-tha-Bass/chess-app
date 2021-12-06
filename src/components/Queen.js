import React from 'react';
import { CenterChessPiece, QueenFarLeftTriangle, QueenMiddleLeftTriangle, QueenFarRightTriangle, QueenMiddleRightTriangle, QueenMiddleTriangle, QueenBottom, QueenStripeTop, QueenStripeBottom, QueenFarLeftTriangleBehind, QueenMiddleLeftTriangleBehind, QueenFarRightTriangleBehind, QueenMiddleRightTriangleBehind, QueenMiddleTriangleBehind } from '../styles/ChessPieces';

const Queen = ({queenColor, stripeColor, borderColor}) => {
    return (
        <CenterChessPiece>
            <QueenMiddleLeftTriangleBehind borderColor={borderColor} marginTop="0.5" marginLeft="-1.5"/>
            <QueenMiddleLeftTriangle bgcolor={queenColor} marginTop="0.5" marginLeft="-1.5"/>
            <QueenMiddleRightTriangleBehind borderColor={borderColor} marginTop="0.5" marginLeft="1.5"/>
            <QueenMiddleRightTriangle bgcolor={queenColor} marginTop="0.5" marginLeft="1.5"/>
            <QueenBottom bgcolor={queenColor} marginTop="4" borderColor={borderColor}/>
            <QueenFarRightTriangleBehind borderColor={borderColor} marginTop="0.5" marginLeft="3"/>
            <QueenFarRightTriangle bgcolor={queenColor} marginTop="0.5" marginLeft="3"/>
            <QueenFarLeftTriangleBehind borderColor={borderColor} marginTop="0.5" marginLeft="-3"/>
            <QueenFarLeftTriangle bgcolor={queenColor} marginTop="0.5" marginLeft="-3"/>
            <QueenStripeBottom bgcolor={stripeColor} marginTop="4.5"/>
            <QueenMiddleTriangleBehind borderColor={borderColor} marginTop="0.5" />
            <QueenMiddleTriangle bgcolor={queenColor} marginTop="0.5" />
        </CenterChessPiece>
    )
}

export default Queen;
