import React from "react";
import { Link, NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  return (
    <div className="d-flex sidebar flex-column flex-shrink-0  text-white bg-dark">
      <ul className="nav nav-pills  flex-column mb-auto">
        
        <NavLink className="nav-item nav-link text-white" to="/teacher/announcement">
         Announcement
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/teacher/result">
          Result
        </NavLink>
        <NavLink className="nav-item nav-link text-white" to="/teacher/studentDetail">
          Student-Detail
        </NavLink>
        
      </ul>
      <hr />

      <NavLink className="text-decoration-none text-white mb-4 mx-2" to="/logout">
        SignOut
      </NavLink>
    </div>
  );
};

export default TeacherSidebar;