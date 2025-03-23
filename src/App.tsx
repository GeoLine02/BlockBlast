import { Route, Routes } from "react-router";
import HomePage from "./components/Home/HomePage";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<GameBoard />} path="/game-board" />
      </Routes>
    </div>
  );
}

export default App;
