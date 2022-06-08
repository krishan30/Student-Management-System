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
import Home from "./pages/home/Home";
import NewEnroll from "./pages/new_Enroll/NewEnroll";
import Grades from "./pages/grades/Grades";
import Profile from "./pages/profile/Profile";
import MyCourses from "./pages/my_Courses/MyCourses.jsx";
import Notification from "./pages/notifications/Notifications";
import Course from "./pages/course/Course";
import { productInputs } from "./formSource";
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
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            {localStorage.getItem("typeId") === "3" && (
              <React.Fragment>
                <Route path="/Admin/*" element={<AdminLanding />} />
                <Route
                  path="/Admin"
                  element={<Navigate to="/Admin/dashboard" replace />}
                />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") !== "3" && (
              <React.Fragment>
                <Route path="/Admin/*" element={<Navigate to="/" replace />} />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") === "2" && (
              <React.Fragment>
                <Route path="/Admin/*" element={<TeacherLanding />} />
                <Route path="/teacher/*" element={<TeacherLanding />}></Route>
                <Route
                  path="/teacher"
                  element={<Navigate to="/teacher/announcement" replace />}
                />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") !== "2" && (
              <React.Fragment>
                <Route
                  path="/teacher/*"
                  element={<Navigate to="/" replace />}
                />
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") === "1" && (
              <React.Fragment>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="grades">
                    <Route index element={<Grades />} />
                  </Route>

                  <Route path="newEnroll">
                    <Route index element={<NewEnroll />} />
                  </Route>

                  <Route path="profile">
                    <Route
                      index
                      element={
                        <Profile
                          inputs={productInputs}
                          title="Add New Product"
                        />
                      }
                    />
                  </Route>

                  <Route path="myCourses">
                    <Route index element={<MyCourses />} />
                  </Route>

                  <Route path="notifications">
                    <Route index element={<Notification />} />
                  </Route>

                  <Route path="course">
                    <Route index element={<Course />} />
                    <Route path=":courseId" element={<Course />} />
                  </Route>
                </Route>
              </React.Fragment>
            )}

            {localStorage.getItem("typeId") !== "1" && (
              <React.Fragment>
                <Route path="/*" element={<Navigate to="/login" replace />} />
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
