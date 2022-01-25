import React from "react";
import styled from "styled-components";
import Score from "./score";

const HeaderStyled = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.29);
  border-radius: 0.5em;
  color: white;
  display: flex;
  padding: 12px 12px 12px 23px;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 21px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 36px;
      line-height: 0.9;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Piedra <br /> Papel <br />
        Tijera
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
