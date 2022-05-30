import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const Profile = ({ inputs, title }) => {
  const [file,] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>U.K.K.P ABEGUNAWARDHANA</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="info">
              
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div> 
              {inputs.map((input) => (                
              ))} */}

              <div className="info-data">
                  <label>Full name</label>
                  <span>Kasun Abegunawardhana</span>
                </div>
                
                <div className="info-data">
                  <label>Date of birth</label>
                  <span>1998.05.20</span>
                </div>

                <div className="info-data">
                  <label>Gender</label>
                  <span>Male</span>
                </div>
                <div className="info-data">
                  <label>Email</label>
                  <span>gg@gmail.com</span>
                </div>
                <div className="info-data">
                  <label>Mobile No</label>
                  <span>0712048482</span>
                </div>
                <div className="info-data">
                  <label>Address</label>
                  <span>210A,yaya7,Hansayapalama,Aralaganvila</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
