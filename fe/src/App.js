import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import AddAnnouncement from './components/teacher/addAnnouncement';
import ViewStudentDetail from './components/teacher/viewStudentDetail';


export default function App() {
  

  return (
    <div className="App">
      <AddAnnouncement></AddAnnouncement>
      <ViewStudentDetail> </ViewStudentDetail>
    </div>
  );
}
