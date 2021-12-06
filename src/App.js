import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Moves from "./components/Moves";
import Notepad from "./components/Notepad";
import Notes from "./components/Notes";
import Openings from "./components/Openings";

const App = () => {
  return (
    <>
      <Board />
      <BrowserRouter>
        <Routes>
          <Route element={<Notepad />} path="/" />
          <Route index element={<Notepad />} />
          <Route element={<Moves />} path="moves" />
          <Route element={<Notes />} path="notes" />
          <Route element={<Openings />} path="openings" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
