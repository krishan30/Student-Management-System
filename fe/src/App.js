import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLanding from "./pages/admin/adminLanding";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Admin/*" element={<AdminLanding />} />
        <Route
          path="/Admin"
          element={<Navigate to="/Admin/dashboard" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
