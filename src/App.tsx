import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { ReceiveModel } from "./components/ReceiveModel/ReceiveModel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/receive" element={<ReceiveModel />} /> */}
      </Routes>
    </div>
  );
}

export default App;
