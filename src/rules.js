import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background: white;
    position: fixed;
    padding: 4em 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 3em;
    }
  }
  .close {
    margin-top: 2em;
  }
  @media screen and (min-width: 1024px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
  }
`;
function Rules() {
  const [visible, setVisible] = useState(false);
  const handleToggleClick = () => {
    setVisible(!visible);
  };
  return (
    <RulesStyled>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules </h2>
          <img src="./images/image-rules.svg" alt="rules" />
          <img
            onClick={handleToggleClick}
            src="./images/icon-close.svg"
            alt="close"
            className="close"
          />
        </div>
      )}
      <Button onClick={handleToggleClick} className="button">
        {" "}
        REGLAS{" "}
      </Button>
    </RulesStyled>
  );
}

export default Rules;
