import React from "react";

const AdminHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <a className="navbar-brand h1 mx-4 text-white" href="/Admin">
        Learn
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto"></ul>
        <span className="navbar-text text-white me-3">
          Admin
        </span>
      </div>
    </nav>
  );
};

export default AdminHeader;
