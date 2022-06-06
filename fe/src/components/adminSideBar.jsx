import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex sidebar flex-column flex-shrink-0  text-white bg-dark">
      <ul className="nav nav-pills  flex-column mb-auto">
        <NavLink className="nav-item nav-link text-white" to="/Admin/dashboard">
          DashBoard
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/Admin/teacher">
          Teachers
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/Admin/student">
          Students
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/Admin/course">
          Courses
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/Admin/timetable">
          TimeTable
        </NavLink>
      </ul>
      <hr />

      <NavLink className="text-decoration-none text-white mb-4 mx-2" to="/logout">
        SignOut
      </NavLink>
    </div>
  );
};

export default Sidebar;
