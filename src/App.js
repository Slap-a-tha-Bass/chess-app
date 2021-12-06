import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Moves from "./components/Moves";
import Notepad from "./components/Notepad";
import Notes from "./components/Notes";
import Openings from "./components/Openings";

const App = () => {
  console.log('%c Used all styled components for this project...hope you like it!', 'border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace');
  console.log('%c corey@deloach.dev', 'border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(60,60,60); font-size: 20px; font-family: monospace');
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
