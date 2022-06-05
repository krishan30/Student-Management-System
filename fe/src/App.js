import React from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLanding from "./pages/admin/adminLanding";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import AddAnnouncement from "./components/teacher/addAnnouncement";
// import ViewStudentDetail from "./components/teacher/viewStudentDetail";
// import AddExamResult from "./components/teacher/addExamResults";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Admin/*" element={<AdminLanding />} />
          <Route
            path="/Admin"
            element={<Navigate to="/Admin/dashboard" replace />}
          />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        theme="colored"
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
      />

      {/* <div className="App">
      <AddAnnouncement></AddAnnouncement>
      <ViewStudentDetail> </ViewStudentDetail>
      <AddExamResult></AddExamResult> */}
    </div>
  );
}
