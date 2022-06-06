import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLanding from "./pages/admin/adminLanding";
import NavBarTeacher from "./components/teacher/navbar";
import Login from "./pages/login";
import PrivateRoutes from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoute";
import Logout from "./pages/logout";
import jwtDecode from "jwt-decode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import AddAnnouncement from "./components/teacher/addAnnouncement";
// import ViewStudentDetail from "./components/teacher/viewStudentDetail";
// import AddExamResult from "./components/teacher/addExamResults";

export default function App() {
  const [userTypeId, setUserType] = useState();

  useEffect(() => {
    try {
      if (localStorage.getItem("token")) {
        const user = jwtDecode(localStorage.getItem("token"));
        console.log(user.usertype);
        setUserType(user.usertype);
      }
    } catch (error) {}
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
            {userTypeId === 3 && (
              <React.Fragment>
                <Route path="/Admin/*" element={<AdminLanding />} />
                <Route
                  path="/Admin"
                  element={<Navigate to="/Admin/dashboard" replace />}
                />
              </React.Fragment>
            )}

            {userTypeId !== 3 && (
              <React.Fragment>
                <Route path="/Admin/*" element={<Navigate to="/" replace />} />
              </React.Fragment>
            )}

            <Route path="/*" element={<NavBarTeacher />}></Route>
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
