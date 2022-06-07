import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLanding from "./pages/admin/adminLanding";
import Login from "./pages/login";
import PrivateRoutes from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoute";
import Logout from "./pages/logout";
import jwtDecode from "jwt-decode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import TeacherLanding from "./components/teacher/teacherLanding";

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            {localStorage.getItem("typeId") === '3' && (
              <React.Fragment>
                <Route path="/Admin/*" element={<AdminLanding />} />
                <Route
                  path="/Admin"
                  element={<Navigate to="/Admin/dashboard" replace />}
                />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") !== '3' && (
              <React.Fragment>
                <Route path="/Admin/*" element={<Navigate to="/" replace />} />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") === '1' && (
              <React.Fragment>
                <Route path="/Admin/*" element={<TeacherLanding />} />
                <Route path="/teacher/*" element={<TeacherLanding />}></Route>
                <Route
                  path="/teacher"
                  element={<Navigate to="/teacher/announcement" replace />}
                />
              </React.Fragment>
            )}
          </Route>
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
    </div>
  );
}
