import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import TeacherDashboard from "./components/TeacherDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainDashboard />}></Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
