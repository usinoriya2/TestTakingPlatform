import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import OnlineTestPlatform from "./components/OnlineTestPlatform";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainDashboard />}></Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
        <Route path="/online-test-platform" element={<OnlineTestPlatform/>}/>
      </Routes>
    </div>
  );
}

export default App;
