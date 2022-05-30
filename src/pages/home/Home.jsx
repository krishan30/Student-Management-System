import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Notifications from "../../components/widget/Notifications";

import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Notifications />
        </div>
       
        <div className="listContainer">
          <div className="listTitle">Course overview</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
