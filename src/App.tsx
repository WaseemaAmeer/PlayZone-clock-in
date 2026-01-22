import { Routes, Route } from "react-router-dom";
import TimeClock from "./components/clockin";
import ClockOut from "./pages/clockout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TimeClock />} />
      <Route path="/clockout" element={<ClockOut />} />
    </Routes>
  );
}

export default App;
