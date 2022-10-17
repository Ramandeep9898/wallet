import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Aside } from "./components/Aside.component/Aside";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Aside />} />
      </Routes>
    </div>
  );
}

export default App;
