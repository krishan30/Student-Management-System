import AdminHeader from "./adminHeader";
import React from "react";
import Sidebar from "./adminSideBar";

function LandingComponent() {
  return (
    <div>
      <AdminHeader />
      <div className="col-2"><Sidebar /></div>
      
    </div>
  );
}

export default LandingComponent;
