import React from "react";

const AdminHeader = () => {
  return (
    <nav class="navbar navbar-expand-lg  bg-dark">
      <a class="navbar-brand h1 mx-4 text-white" href="#">
        Learn
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto"></ul>
        <span class="navbar-text text-white me-3">
          Admin
        </span>
      </div>
    </nav>
  );
};

export default AdminHeader;
