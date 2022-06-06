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
        <div className="col-2 p-0 bg-dark"  style={{ height: "225rem" }}>
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/teacher/announcement" element={<Announcement />} />
            <Route path="/teacher/result" element={<Result />} />
            <Route path="/teacher/studentDetail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default TeacherLanding;