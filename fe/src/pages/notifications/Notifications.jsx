import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./notifications.scss";
import Announcements from "../../components/announcements/Announcements";


const Notifications = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="topl">
          <h1>Notifications</h1>
        </div>
        <div className="widgets">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
