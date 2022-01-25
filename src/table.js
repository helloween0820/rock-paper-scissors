import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ScoreContext } from "./App";
import Button, { WhiteButton } from "./button";
import Token from "./token";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .triangulo {
    display: ${({ inGame }) => (!inGame ? "none" : "flex")};
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
`;
const elements = ["paper", "scissors", "rock"];
function Table() {
  const [inGame, setInGame] = useState(false);
  const [pick, setPick] = useState("");
  const [results, setResults] = useState("");
  const [housePick, setHousePick] = useState("default");
  const { score, setScore } = useContext(ScoreContext);
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
    console.log(results);
    if (results === "Ganaste") {
      setScore(score + 1);
    }
  }
  const victory = (pick, housePick) => {
    if (housePick === pick) {
      return "Empate";
    }
    if (pick === "paper") {
      if (housePick === "scissors") {
        return "Perdiste";
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
        return "Perdiste";
      }
    }
    if (pick === "rock") {
      if (housePick === "scissors") {
        return "Ganaste";
      }
      if (housePick === "paper") {
        return "Perdiste";
      }
    }
  };
  function handleTryAgain() {
    setInGame(false);
  }
  return (
    <TableStyled>
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
            <Token name={pick} />
            <p>tu elegiste</p>
          </div>
          <div className="in-game">
            <Token name={housePick} />
            <h3>La casa eligio</h3>
          </div>
          <div className="results">
            <h2>{results} </h2>
            <WhiteButton onClick={handleTryAgain}> Jugar Otra vez </WhiteButton>
          </div>
        </>
      )}
    </TableStyled>
  );
}

export default Table;
