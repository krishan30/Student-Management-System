import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminCourse from "./adminCourse";
import AdminStudent from "./adminStudent";
import AdminHeader from "../../components/adminHeader";
import Sidebar from "../../components/adminSideBar";
import AdminTeacher from "./adminTeacher";
import AdminTimeTable from "./adminTimeTable";
import AdminDashboard from "./adminDashboard";

const AdminLanding = () => {
  return (
    <div>
      <AdminHeader />
      <div className="row m-0">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/teacher" element={<AdminTeacher />} />
            <Route path="/course" element={<AdminCourse />} />
            <Route path="/student" element={<AdminStudent />} />
            <Route path="/timetable" element={<AdminTimeTable />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
