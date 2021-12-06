import styled from "styled-components";

export const PawnHead = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border-radius: 50%;
  border: 2px solid black;
  height: 1rem;
  width: 1rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const PawnBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border-radius: 50%;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const PawnBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: 2rem;
  width: 2.5rem;
  border-radius: 3rem 3rem 0 0;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const PawnStripe = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: 2rem;
  border-radius: 10%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;

export const CenterChessPiece = styled.div`
  display: flex;
  justify-content: center;
`;
export const BishopHat = styled.div`
  position: absolute;
  height: 0.7rem;
  width: 0.7rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor || "red"};
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopTop = styled.div`
  position: absolute;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1.5rem solid ${(props) => props.bgcolor || "red"};
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 2.4rem;
  width: 2.4rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopCross1 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  height: 1.2rem;
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: 1.2rem;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 1.5rem;
  width: 2rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: 1.6rem;
  border-radius: 10%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopStripeTop = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: 1rem;
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopRobesLeft = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.7rem;
  width: 2rem;
  border: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 10%;
  transform: skew(-10deg);
  transform: rotate(-10deg);
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopRobesRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.7rem;
  width: 2rem;
  border: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 10%;
  transform: skew(10deg);
  transform: rotate(10deg);
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingHeadLeft = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 2.5rem;
  width: 2rem;
  transform: rotate(-20deg);
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingHeadRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 2.5rem;
  width: 2rem;
  transform: rotate(20deg);
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingHeadMiddle = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3rem;
  width: 1.5rem;
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingCross1 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  height: 1.2rem;
  border-radius: 20%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: 1.2rem;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  border-radius: 20%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 1.5rem;
  width: 3rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingStripeTop = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: 1.5rem;
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: 2rem;
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenFarLeftTriangle = styled.div`
  position: absolute;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  transform: rotate(-18deg);
  border-bottom: 4rem solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenFarLeftTriangleBehind = styled.div`
  position: absolute;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  transform: rotate(-18deg);
  border-bottom: 4rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleLeftTriangle = styled.div`
  position: absolute;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  transform: rotate(-9deg);
  border-bottom: 4rem solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleLeftTriangleBehind = styled.div`
  position: absolute;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  transform: rotate(-9deg);
  border-bottom: 4rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenFarRightTriangle = styled.div`
  position: absolute;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  transform: rotate(18deg);
  border-bottom: 4rem solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenFarRightTriangleBehind = styled.div`
  position: absolute;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  transform: rotate(18deg);
  border-bottom: 4rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleRightTriangle = styled.div`
  position: absolute;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  transform: rotate(9deg);
  border-bottom: 4rem solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleRightTriangleBehind = styled.div`
  position: absolute;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  transform: rotate(9deg);
  border-bottom: 4rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleTriangle = styled.div`
  position: absolute;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 4rem solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenMiddleTriangleBehind = styled.div`
  position: absolute;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-bottom: 4rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.borderColor || "red"};
  height: 1.5rem;
  width: 3rem;
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const QueenStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: 2rem;
  border-radius: 10%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  height: 2rem;
  width: 2.5rem;
  border-radius: 3rem 3rem 0 0;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 1.5rem;
  width: 3rem;
  border-radius: 20%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightBack = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  height: 3.5rem;
  width: 2rem;
  border-radius: 0 3rem 1rem 0;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightHead = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3.5rem;
  width: 1.5rem;
  transform: rotate(45deg);
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightHead2 = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3rem;
  width: 1.5rem;
  transform: rotate(35deg);
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightEyes = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.5rem;
  width: 0.75rem;
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightNose = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightEarRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.5rem;
  width: 0.75rem;
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightBackStripe = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3rem;
  width: 1.5rem;
  border-radius: 0 3rem 1rem 0;
  border-right: 0.3rem solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KnightStripe = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: 2rem;
  border-radius: 25%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const RookBottom = styled.div`
  position: absolute;
  width: 2rem;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1.5rem solid ${(props) => props.bgcolor || "red"};
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const RookBottomBehind = styled.div`
  position: absolute;
  width: 2.25rem;
  border-left: 1.25rem solid transparent;
  border-right: 1.25rem solid transparent;
  border-bottom: 1.75rem solid ${(props) => props.borderColor || "red"};
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const RookMiddle = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3rem;
  width: 1.5rem;
  border-radius: 20%;
  border-radius: 25%;
  border: 1px solid ${(props) => props.borderColor || "red"};
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const RookTop = styled.div`
  position: absolute;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1.5rem solid ${(props) => props.bgcolor || "red"};
  width: 2rem;
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const RookTopBehind = styled.div`
  position: absolute;
  border-left: 1.25rem solid transparent;
  border-right: 1.25rem solid transparent;
  border-top: 1.75rem solid ${(props) => props.borderColor || "red"};
  border-radius: 25%;
  width: 2.25rem;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;