import styled from "styled-components";

export const PawnHead = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border-radius: 50%;
  border: 2px solid black;
  height: calc(0.5rem + 1vw);
  width: calc(0.5rem + 1vw);
  margin-left: 0;
  margin-top: calc(0.25rem + 0.75vw);
`;
export const PawnBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border-radius: 50%;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: calc(1rem + 1vw);
  width: calc(1rem + 1vw);
  margin-left: 0;
  margin-top: calc(1rem + 1.25vw);
`;
export const PawnBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: calc(1.5rem + 1vw);
  width: calc(2rem + 1vw);
  border-radius: 3rem 3rem 0 0;
  margin-left: calc(2.25rem + 1vw);
  margin-top: calc(3.25rem + 1vw);
`;
export const PawnStripe = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: calc(1rem + 1vw);
  border-radius: 10%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: 0;
  margin-top: calc(3rem + 1.5vw);
`;
export const PawnStripe2 = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: calc(1rem + 1vw);
  border-radius: 10%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: 0;
  margin-top: calc(3.5rem + 1.5vw);
`;
export const CenterChessPiece = styled.div`
  display: flex;
  justify-content: center;
`;
export const BishopHat = styled.div`
  position: absolute;
  height: calc(0.25rem + 0.5vw);
  width: calc(0.25rem + 0.5vw);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor || "red"};
  margin-top: calc(0.1rem + 0.2vw);
`;
export const BishopTop = styled.div`
  position: absolute;
  border-left: calc(0.35rem + 1vw) solid transparent;
  border-right: calc(0.35rem + 1vw) solid transparent;
  border-bottom: 1.5rem solid ${(props) => props.bgcolor || "red"};
  margin-top: calc(0.25rem + 0.5vw);
`;
export const BishopTopBehind = styled.div`
  position: absolute;
  border-left: calc(0.7rem + 0.5vw) solid transparent;
  border-right: calc(0.7rem + 0.5vw) solid transparent;
  border-bottom: 1.5rem solid ${(props) => props.borderColor || "red"};
  margin-top: calc(0.1rem + 0.5vw);
`;
export const BishopBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(1.5rem + 1.5vw);
  width: calc(1.5rem + 1.5vw);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 50%;
  margin-left: 0;
  margin-top: calc(0.6rem + 1vw);
`;
export const BishopCross1 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  height: calc(1rem + 0.5vw);
  border-radius: 10%;
  margin-left: 0;
  margin-top: calc(0.5rem + 0.5vw);
`;
export const BishopCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: calc(0.5rem + 0.5vw);
  border: 1px solid ${(props) => props.bgcolor || "red"};
  border-radius: 10%;
  margin-left: 0;
  margin-top: calc(1rem + 0.5vw);
`;
export const BishopBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.5rem + 1.5vw);
  width: calc(1rem + 1.5vw);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 50%;
  margin-left: 0;
  margin-top: calc(2.25rem + 1vw);
`;
export const BishopStripeTop = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: calc(0.25rem + 1vw);
  border-radius: 10%;
  margin-left: 0;
  margin-top: calc(2.25rem + 1.2vw);
`;
export const BishopStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  width: calc(0.5rem + 1vw);
  border-radius: 10%;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  margin-left: 0;
  margin-top: calc(2.5rem + 1.2vw);
`;
export const BishopRobesLeft = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.25rem + 0.5vw);
  width: calc(1.5rem + 1.5vw);
  border: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 10%;
  transform: skew(-10deg);
  transform: rotate(-10deg);
  margin-left: calc(-1rem - 1vw);
  margin-top: calc(3rem + 1.5vw);
`;
export const BishopRobesRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.25rem + 0.5vw);
  width: calc(1.5rem + 1.5vw);
  border: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 10%;
  transform: skew(10deg);
  transform: rotate(10deg);
  margin-left: calc(1rem + 1vw);
  margin-top: calc(3rem + 1.5vw);
`;
export const KingHeadLeft = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2rem + 1.5vw);
  width: calc(1.5rem + 1.5vw);
  transform: rotate(-20deg);
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: calc(-1.5rem - 1vw);
  margin-top: calc(1rem + 1vw);
`;
export const KingHeadRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2rem + 1.5vw);
  width: calc(1.5rem + 1.5vw);
  transform: rotate(20deg);
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: calc(1.5rem + 1vw);
  margin-top: calc(1rem + 1vw);
`;
export const KingHeadMiddle = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2rem + 1.5vw);
  width: calc(0.75rem + 1vw);
  border-left: 1px solid ${(props) => props.borderColor || "red"};
  border-right: 1px solid ${(props) => props.borderColor || "red"};
  border-bottom: 1px solid ${(props) => props.borderColor || "red"};
  border-radius: 50%;
  margin-left: 0;
  margin-top: calc(0.75rem + 1vw);
`;
export const KingCross1 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  border: 1px solid ${(props) => props.bgcolor || "red"};
  height: calc(0.5rem + 1vw);
  border-radius: 10%;
  margin-top: calc(0.2rem + 0.5vw);
`;
export const KingCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: calc(0.25rem + 1vw);
  border: 1px solid ${(props) => props.bgcolor || "red"};
  border-radius: 10%;
  margin-left: 0;
  margin-top: calc(0.5rem + 0.5vw);
`;
export const KingBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.75rem + 0.5vw);
  width: calc(2rem + 1.5vw);
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 50%;
  margin-left: 0;
  margin-top: calc(3rem + 1.5vw);
`;
export const KingStripeTop = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: calc(1rem + 1vw);
  border-radius: 10%;
  margin-top: calc(3rem + 1.5vw);
`;
export const KingStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: calc(1.5rem + 1vw);
  border-radius: 10%;
  margin-top: calc(3.3rem + 1.5vw);
`;
export const QueenFarLeftTriangle = styled.div`
  position: absolute;
  border-left: calc(0.2rem + 0.5vw) solid transparent;
  border-right: calc(0.2rem + 0.5vw) solid transparent;
  transform: rotate(-18deg);
  border-bottom: calc(2.5rem + 1vw) solid ${(props) => props.bgcolor || "red"};
  margin-left: calc(-3rem - 1vw);
  margin-top: calc(0.5rem + 0.5vw);
`;
export const QueenFarLeftTriangleBehind = styled.div`
  position: absolute;
  border-left: calc(0.4rem + 0.5vw) solid transparent;
  border-right: calc(0.4rem + 0.5vw) solid transparent;
  transform: rotate(-18deg);
  border-bottom: calc(2.7rem + 1vw) solid ${(props) => props.borderColor || "red"};
  margin-left: calc(-3.1rem - 1vw);
  margin-top: calc(0.3rem + 0.5vw);
`;
export const QueenMiddleLeftTriangle = styled.div`
  position: absolute;
  border-left: calc(0.2rem + 0.5vw) solid transparent;
  border-right: calc(0.2rem + 0.5vw) solid transparent;
  transform: rotate(-9deg);
  border-bottom: calc(2.5rem + 1vw) solid ${(props) => props.bgcolor || "red"};
  margin-left: calc(-1.5rem - 1vw);
  margin-top: calc(0.5rem + 0.5vw);
`;
export const QueenMiddleLeftTriangleBehind = styled.div`
  position: absolute;
  border-left: calc(0.4rem + 0.5vw) solid transparent;
  border-right: calc(0.4rem + 0.5vw) solid transparent;
  transform: rotate(-9deg);
  border-bottom: calc(2.7rem + 1vw) solid ${(props) => props.borderColor || "red"};
  margin-left: calc(-1.5rem - 1vw);
  margin-top: calc(0.3rem + 0.5vw);
`;
export const QueenFarRightTriangle = styled.div`
  position: absolute;
  border-left: calc(0.2rem + 0.5vw) solid transparent;
  border-right: calc(0.2rem + 0.5vw) solid transparent;
  transform: rotate(18deg);
  border-bottom: calc(2.5rem + 1vw) solid ${(props) => props.bgcolor || "red"};
  margin-left: calc(3rem + 1vw);
  margin-top: calc(0.5rem + 0.5vw);
`;
export const QueenFarRightTriangleBehind = styled.div`
  position: absolute;
  border-left: calc(0.4rem + 0.5vw) solid transparent;
  border-right: calc(0.4rem + 0.5vw) solid transparent;
  transform: rotate(18deg);
  border-bottom: calc(2.7rem + 1vw) solid ${(props) => props.borderColor || "red"};
  margin-left: calc(3.1rem + 1vw);
  margin-top: calc(0.3rem + 0.5vw);
`;
export const QueenMiddleRightTriangle = styled.div`
  position: absolute;
  border-left: calc(0.2rem + 0.5vw) solid transparent;
  border-right: calc(0.2rem + 0.5vw) solid transparent;
  transform: rotate(9deg);
  border-bottom: calc(2.5rem + 1vw) solid ${(props) => props.bgcolor || "red"};
  margin-left: calc(1.5rem + 1vw);
  margin-top: calc(0.5rem + 0.5vw);
`;
export const QueenMiddleRightTriangleBehind = styled.div`
  position: absolute;
  border-left: calc(0.4rem + 0.5vw) solid transparent;
  border-right: calc(0.4rem + 0.5vw) solid transparent;
  transform: rotate(9deg);
  border-bottom: calc(2.7rem + 1vw) solid ${(props) => props.borderColor || "red"};
  margin-left: calc(1.5rem + 1vw);
  margin-top: calc(0.3rem + 0.5vw);
`;
export const QueenMiddleTriangle = styled.div`
  position: absolute;
  border-left: calc(0.2rem + 0.5vw) solid transparent;
  border-right: calc(0.2rem + 0.5vw) solid transparent;
  border-bottom: calc(2.5rem + 1vw) solid ${(props) => props.bgcolor || "red"};
  margin-top: calc(0.5rem + 0.5vw);
`;
export const QueenMiddleTriangleBehind = styled.div`
  position: absolute;
  border-left: calc(0.4rem + 0.5vw) solid transparent;
  border-right: calc(0.4rem + 0.5vw) solid transparent;
  border-bottom: calc(2.7rem + 1vw) solid ${(props) => props.borderColor || "red"};
  margin-top: calc(0.3rem + 0.5vw);
`;
export const QueenBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.borderColor || "red"};
  height: calc(1rem + 0.5vw);
  width: calc(3rem + 1.5vw);
  border-radius: 50%;
  margin-top: calc(2.5rem + 1.5vw);
`;
export const QueenStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  border: 1px solid ${(props) => props.bgcolor || "red"};
  width: calc(2rem + 1vw);
  border-radius: 10%;
  margin-top: calc(3rem + 1.5vw);
`;
export const KnightBody = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  height: calc(1rem + 1vw);
  width: calc(1.5rem + 1vw);
  border-radius: 3rem 3rem 0 0;
  margin-left: calc(1.5rem + 1.5vw);
  margin-top: calc(2.5rem + 1.5vw);
`;
export const KnightBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.75rem + 1vw);
  width: calc(2.5rem + 1vw);
  border-radius: 20%;
  margin-top: calc(3rem + 1vw);
`;
export const KnightBack = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  transform: translate(-50%, -50%);
  height: calc(3rem + 1vw);
  width: calc(1.5rem + 1vw);
  border-radius: 0 3rem 1rem 0;
  margin-left: calc(2.5rem + 1vw);
  margin-top: calc(1.5rem + 1vw);
`;
export const KnightHead = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2.5rem + 1vw);
  width: calc(1.2rem + 1vw);
  transform: rotate(45deg);
  border-radius: 50%;
  margin-left: calc(-1.4rem - 0.5vw);
  margin-top: calc(0.1rem + 0.1vw);
`;
export const KnightEyes = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.25rem + 0.25vw);
  width: calc(0.5rem + 0.25vw);
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: calc(-1.5rem - 1vw);
  margin-top: calc(0.75rem + 1vw);
`;
export const KnightNose = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.2rem + 0.2vw);
  width: calc(0.2rem + 0.2vw);
  border-radius: 50%;
  margin-left: calc(-2.75rem - 1vw);
  margin-top: calc(1.75rem + 1vw);
`;
export const KnightEarRight = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(0.25rem + 0.25vw);
  width: calc(0.5rem + 0.25vw);
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: calc(-0.5rem - 0.5vw);
  margin-top: calc(0.1rem + 0.1vw);
`;
export const KnightBackStripe = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2rem + 1vw);
  width: calc(1rem + 1vw);
  border-radius: 0 3rem 1rem 0;
  border-right: 0.3rem solid ${(props) => props.borderColor || "red"};
  margin-left: calc(0.75rem + 0.5vw);
  margin-top: calc(0.5rem + 0.25vw);
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
  width: calc(1rem + 1vw);
  border-left: calc(0.25rem + 0.25vw) solid transparent;
  border-right: calc(0.25rem + 0.25vw) solid transparent;
  border-bottom: calc(1rem + 0.5vw) solid ${(props) => props.bgcolor || "red"};
  border-radius: 15%;
  margin-left: 0;
  margin-top: calc(3rem + 1vw);
`;
export const RookBottomBehind = styled.div`
  position: absolute;
  width: calc(1.25rem + 1vw);
  border-left: calc(0.5rem + 0.5vw) solid transparent;
  border-right: calc(0.5rem + 0.5vw) solid transparent;
  border-bottom: calc(1.5rem + 0.5vw) solid ${(props) => props.borderColor || "red"};
  border-radius: 15%;
  margin-left: 0;
  margin-top: calc(2.75rem + 1vw);
`;
export const RookMiddle = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: calc(2rem + 1vw);
  width: calc(1rem + 0.5vw);
  border-radius: 20%;
  border-radius: 25%;
  border: 1px solid ${(props) => props.borderColor || "red"};
  margin-left: 0;
  margin-top: calc(1rem + 1vw);
`;
export const RookTop = styled.div`
  position: absolute;
  width: calc(1rem + 1vw);
  border-left: calc(0.25rem + 0.25vw) solid transparent;
  border-right: calc(0.25rem + 0.25vw) solid transparent;
  border-top: calc(1rem + 0.5vw) solid ${(props) => props.bgcolor || "red"};
  border-radius: 15%;
  margin-left: 0;
  margin-top: calc(0.5rem + 0.5vw);
`;
export const RookTopBehind = styled.div`
  position: absolute;
  width: calc(1.25rem + 1vw);
  border-left: calc(0.5rem + 0.5vw) solid transparent;
  border-right: calc(0.5rem + 0.5vw) solid transparent;
  border-top: calc(1.5rem + 0.5vw) solid ${(props) => props.borderColor || "red"};
  border-radius: 15%;
  margin-left: 0;
  margin-top: calc(0.25rem + 0.5vw);
`;