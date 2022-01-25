import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ScoreContext } from "./App";
import { WhiteButton } from "./button";
import Token from "./token";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .triangulo {
    display: ${({ inGame }) => (!inGame ? "block" : "none")};
    position: absolute;
    height: 250px;
    bottom: 0px;
  }
  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results {
    text-align: center;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 300px;
    & div:nth-of-type(3) {
      ${({ inGame, results }) =>
        inGame && results && " grid: 2 span;grid-column: 2 / 4;grid-row: 1;"};
    }
    ${({ inGame, results }) =>
      inGame && results && " grid-template-columns: 300px 110px 110px 300px"};
    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      div {
        order: 2;
      }
      p {
        order: 1;
        margin-bottom: 2em;
      }
    }
    .triangulo {
      height: 350px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
const elements = ["paper", "scissors", "rock"];
function Table() {
  const [inGame, setInGame] = useState(false);
  const [pick, setPick] = useState("");
  const [results, setResults] = useState("");
  const [housePick, setHousePick] = useState("default");
  const { score, setScore, scoreMachine, setScoreMachine } =
    useContext(ScoreContext);
  function getRandomInit(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInit(0, 3)];
        setHousePick(pick);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }

  async function onClick(name) {
    setInGame(true);
    setPick(name);
    const house = await launchHousePick();
    const results = victory(name, house);
    setResults(results);

    if (results === "Ganaste") {
      setScore(score + 1);
    }
    if (results === "Perdiste, la maquina gana") {
      setScoreMachine(scoreMachine + 1);
    }
  }
  const victory = (pick, housePick) => {
    if (housePick === pick) {
      return "Empate";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "Perdiste, la maquina gana";
      }
      if (housePick === "rock") {
        return "Ganaste";
      }
    }
    if (pick === "scissors") {
      if (housePick === "paper") {
        return "Ganaste";
      }
      if (housePick === "rock") {
        return "Perdiste, la maquina gana";
      }
    }
    if (pick === "rock") {
      if (housePick === "scissors") {
        return "Ganaste";
      }
      if (housePick === "paper") {
        return "Perdiste, la maquina gana";
      }
    }
  };
  function handleTryAgain() {
    setInGame(false);
    setResults("");
  }
  return (
    <TableStyled inGame={inGame} results={results !== ""}>
      <img
        src="./images/bg-triangle.svg"
        alt="triangulo"
        className="triangulo"
      />
      {!inGame ? (
        <>
          <Token name="paper" onClick={onClick} />
          <Token name="scissors" onClick={onClick} />
          <Token name="rock" onClick={onClick} />
        </>
      ) : (
        <>
          <div className="in-game">
            <Token
              name={pick}
              isShadowAnimaned={results === "Ganaste"}
              inGame={inGame}
            />
            <p>tu elegiste</p>
          </div>
          <div className="in-game">
            <Token
              name={housePick}
              isShadowAnimaned={results === "Perdiste, la maquina gana"}
              inGame={inGame}
            />
            <p>La maquina eligio</p>
          </div>
          <div className="results">
            {results && (
              <>
                <h2>{results} </h2>
                <WhiteButton onClick={handleTryAgain}>
                  Jugar Otra vez
                </WhiteButton>
              </>
            )}
          </div>
        </>
      )}
    </TableStyled>
  );
}

export default Table;
