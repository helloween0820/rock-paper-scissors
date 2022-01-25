import "./App.css";
import Header from "./Header";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Table from "./table";
import Rules from "./rules";
import { createContext, useState } from "react";

export const ScoreContext = createContext();

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;

  body {
    font-family: "Barlow Semi Condensed", sans-serif;
  }
  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }
`;
function App() {
  const [score, setScore] = useState(0);
  const [scoreMachine, setScoreMachine] = useState(0);
  return (
    <ScoreContext.Provider
      value={{
        score,
        scoreMachine,
        setScoreMachine,
        setScore,
      }}
    >
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
