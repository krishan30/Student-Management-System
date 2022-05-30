import React from "react";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import AddAnnouncement from './components/teacher/addAnnouncement';
import ViewStudentDetail from './components/teacher/viewStudentDetail';
import AddExamResult from './components/teacher/addExamResults';

export default function App() {
  
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teacher from "./pages/admin/adminTeacher";
import AdminCourse from "./pages/admin/adminCourse";
import AdminStudent from "./pages/admin/adminStudent";
import AdminHeader from "./components/adminHeader";
import Sidebar from "./components/adminSideBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AdminTeacher from "./pages/admin/adminTeacher";

>>>>>>> test

  return (
<<<<<<< HEAD
    <div className="App">
      <AddAnnouncement></AddAnnouncement>
      <ViewStudentDetail> </ViewStudentDetail>
      <AddExamResult></AddExamResult>
    </div>
=======
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
            
          </Routes>
        </div>
      </div>
    </Router>
>>>>>>> test
  );
}
