import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Moves from "./components/Moves";
import NavBarComponent from "./components/NavBarComponent";
import Notepad from "./components/Notepad";
import Notes from "./components/Notes";
import Openings from "./components/Openings";
import { RootDiv } from "./styles/BoardStyles";

const App = () => {
  console.log(
    "%c Used all styled components for this project...hope you like it!",
    "border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  console.log(
    "%c corey@deloach.dev",
    "border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  return (
    <RootDiv>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route element={<Board />} path="/" />
          <Route index element={<Board />} />
          <Route element={<Notepad />} path="/notepad" />
          <Route element={<Moves />} path="moves" />
          <Route element={<Notes />} path="notes" />
          <Route element={<Openings />} path="openings" />
        </Routes>
      </BrowserRouter>
    </RootDiv>
  );
};

export default App;
