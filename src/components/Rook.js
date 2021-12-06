import React from 'react';
import { CenterChessPiece, RookBottom, RookBottomBehind, RookMiddle, RookTop, RookTopBehind } from '../styles/ChessPieces';

const Rook = ({rookColor, borderColor}) => {
    return (
        <CenterChessPiece>
           <RookMiddle bgcolor={rookColor} marginTop="2" borderColor={borderColor}/> 
            <RookBottomBehind borderColor={borderColor} marginTop="4.15"/>
           <RookBottom bgcolor={rookColor} marginTop="4.25"/>
           <RookTopBehind borderColor={borderColor} marginTop="0.9"/>
           <RookTop bgcolor={rookColor} marginTop="1"/>
        </CenterChessPiece>
    )
}

export default Rook;
