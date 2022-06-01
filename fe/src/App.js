import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import AddAnnouncement from './components/teacher/addAnnouncement';
import ViewStudentDetail from './components/teacher/viewStudentDetail';
import AddExamResult from './components/teacher/addExamResults';

export default function App() {
  

  return (
    <div className="App">
      <AddAnnouncement></AddAnnouncement>
      <ViewStudentDetail> </ViewStudentDetail>
      <AddExamResult></AddExamResult>
    </div>
  );
}
