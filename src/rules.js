import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";
const RulesStyled = styled.div`
  text-align: center;
  &::before {
    content: "";
    display: ${({ visible }) => (visible ? "block" : "none")};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .rules-modal {
    background: white;
    position: fixed;
    padding: 4em 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
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
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }
    .rules-modal {
      width: 400px;
      margin: auto;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      border-radius: 10px;
      padding: 2em;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1em 0;
      }
    }
    .close {
      position: absolute;
      right: 2em;
      top: 0.8em;
    }
  }
`;
function Rules() {
  const [visible, setVisible] = useState(false);
  const handleToggleClick = () => {
    setVisible(!visible);
  };
  return (
    <RulesStyled visible={visible}>
      {visible && (
        <div className="rules-modal">
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
