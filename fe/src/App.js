import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
// import NavBarTeacher from "./components/teacher/navbar";
// import TeacherHeader from "./components/teacher/teacherHeader";
// import TeacherSidebar from "./components/teacher/teacherSideBar";
import { BrowserRouter as Router  , Route,Routes} from "react-router-dom";
import TeacherLanding from "./components/teacher/teacherLanding";

export default function App() {
  return (
    <div className="App">
      {/* <NavBarTeacher /> */}
      {/* <TeacherLanding></TeacherLanding> */}
      <Router>
        <TeacherLanding></TeacherLanding>
        {/* <TeacherHeader></TeacherHeader> */}
        {/* <TeacherSidebar></TeacherSidebar> */}
      </Router>
    </div>
  );
}
