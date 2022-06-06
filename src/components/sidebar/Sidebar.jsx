import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewModuleIcon from '@mui/icons-material/ViewModule';import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LMS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>

          <Link to="/notifications" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="title">LISTS</p>

          <Link to="/myCourses" style={{ textDecoration: "none" }}>
            <li>
              <ViewModuleIcon className="icon" />
              <span>My Courses</span>
            </li>
          </Link>
          
          <Link to="/grades" style={{ textDecoration: "none" }}>
            <li>
              <GradeIcon className="icon" />
              <span>Grades</span>
            </li>
          </Link>
          
          <Link to="/newEnroll" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>New Enroll</span>
          </li>
          </Link>

          {/* <Link to="/grades/123" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          </Link> */}
          
          <p className="title">USER</p>

          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          
          <Link to="/logout" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>

        </ul>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  );
};

export default Sidebar;
