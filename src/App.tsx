import { Route, Routes } from "react-router";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
