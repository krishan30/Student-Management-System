import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherHeader from "./teacherHeader";
import Sidebar from "./teacherSideBar";
import Announcement from "./addAnnouncement";
import Result from "./addExamResults";
import Detail from './viewStudentDetail';
const TeacherLanding = () => {
  return (
    <div>
      <TeacherHeader />
      <div className="row m-0">
        <div className="col-2 p-0 bg-dark"  style={{ height: "100vh" }}>
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/result" element={<Result />} />
            <Route path="/studentDetail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default TeacherLanding;