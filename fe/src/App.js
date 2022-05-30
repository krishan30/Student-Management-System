import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teacher from "./pages/admin/adminTeacher";
import AdminCourse from "./pages/admin/adminCourse";
import AdminStudent from "./pages/admin/adminStudent";
import AdminHeader from "./components/adminHeader";
import Sidebar from "./components/adminSideBar";
import AdminTeacher from "./pages/admin/adminTeacher";
import AdminTimeTable from "./pages/admin/adminTimeTable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Router>
        <AdminHeader />
      <div className="row m-0">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/Admin/dashboard" element={<Teacher />} />
            <Route path="/Admin/teacher" element={<AdminTeacher />} />
            <Route path="/Admin/course" element={<AdminCourse />} />
            <Route path="/Admin/student" element={<AdminStudent />} />
            <Route path="/Admin/timetable" element={<AdminTimeTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
