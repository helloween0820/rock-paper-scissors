import React from "react";
import styled from "styled-components";

const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 16px solid ${(props) => props.color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  background: white;
  box-shadow: 0 5px 0 ${(props) => props.color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  ${({ isShadowAnimaned }) =>
    isShadowAnimaned &&
    "  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.04),0 0 0 80px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.02)"};

  &:active {
    transform: scale(0.9);
  }
  .box {
    box-shadow: 0 -4px 0 #babfd4;
    justify-content: center;
    align-items: center;
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    ${({ inGame }) =>
      inGame
        ? "width: 300px; height: 295px;  border-width: 32px;"
        : "width: 200px; height: 195px;border-width: 22px;"}
  }
 
   
  }
`;

const colors = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
  default: {
    base: "#15294d",
    border: "#15294d",
  },
};

function Token({ name = "", onClick, isShadowAnimaned = false, inGame }) {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }
  const color = colors[name] ? colors[name] : colors.default;
  return (
    <TokenStyled
      color={color}
      onClick={handleClick}
      isShadowAnimaned={isShadowAnimaned}
      inGame={inGame}
    >
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </TokenStyled>
  );
}

export default Token;
