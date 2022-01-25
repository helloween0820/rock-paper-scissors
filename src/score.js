import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "./App";

const ScoreStyled = styled.div`
  .puntaje {
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    color: #2a45c2;
    width: 70px;
    font-size: 12px;
    text-transform: uppercase;
    margin-left: 80px;
  }
  p {
    color: #565468;
    font-size: 30px;
    margin: 0;
    font-weight: 700;
  }
  .machine {
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    color: #2a45c2;
    width: 70px;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: -87px;
  }
  @media screen and (min-width: 768px) {
    p {
      font-size: 60px;
    }
    .machine {
      margin-top: -126px;
      width: 100px;
      margin-left: -30px;
      font-size: 16px;
    }
    .puntaje {
      width: 100px;
      font-size: 16px;
    }
  }
`;
/*  small {
     height: 90px;
     color: #2a45c2;
     text-transform: uppercase;
     font-size: 12px;
     font-weight: bold;
   }
   p {
     color: #565468;
     font-size: 40px;
     margin: 0;
     font-weight: 700;
   } */

function Score() {
  const { score, scoreMachine } = useContext(ScoreContext);

  console.log(scoreMachine);
  return (
    <>
      <ScoreStyled>
        <div className="puntaje">
          <small>puntaje jugador</small>
          <p>{score}</p>
        </div>
        <div className="machine">
          <small>puntaje maquina</small>
          <p>{scoreMachine}</p>
        </div>
      </ScoreStyled>
    </>
  );
}

export default Score;
