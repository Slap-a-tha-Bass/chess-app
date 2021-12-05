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
  height: 0.1rem;
  width: 2rem;
  border-radius: 25%;
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
  width: 0.2rem;
  height: 1.2rem;
  border-radius: 40%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: 1.2rem;
  height: 0.2rem;
  border-radius: 40%;
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
  height: 0.2rem;
  width: 1.6rem;
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const BishopStripeTop = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.2rem;
  width: 1rem;
  border-radius: 25%;
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
  border-left: 1px solid ${props => props.borderColor || 'red'};
  border-right: 1px solid ${props => props.borderColor || 'red'};
  border-bottom: 1px solid ${props => props.borderColor || 'red'};
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
  border-left: 1px solid ${props => props.borderColor || 'red'};
  border-right: 1px solid ${props => props.borderColor || 'red'};
  border-bottom: 1px solid ${props => props.borderColor || 'red'};
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingHeadMiddle = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 3rem;
  width: 1.5rem;
  border-left: 1px solid ${props => props.borderColor || 'red'};
  border-right: 1px solid ${props => props.borderColor || 'red'};
  border-bottom: 1px solid ${props => props.borderColor || 'red'};
  border-radius: 50%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingCross1 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: 0.2rem;
  height: 1.2rem;
  border-radius: 40%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingCross2 = styled.div`
  background-color: ${(props) => props.bgcolor || "red"};
  position: absolute;
  width: 1.2rem;
  height: 0.2rem;
  border-radius: 40%;
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
  height: 0.2rem;
  width: 1.5rem;
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;
export const KingStripeBottom = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgcolor || "red"};
  height: 0.2rem;
  width: 2rem;
  border-radius: 25%;
  margin-left: ${(props) => props.marginLeft || 0}rem;
  margin-top: ${(props) => props.marginTop || 0}rem;
`;

