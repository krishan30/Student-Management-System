import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React,{ useState,useEffect } from "react";
import api from "../../services/api";
import config from "../../config/config.json";

const Profile = () => {
  const [file,setFile] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${config.REACT_APP_API}/api/student/sc/${localStorage.getItem('studentid')}`);
        //console.log(response.data);
        setFile(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
    fetchData()
  },[]);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topl">
          <h1>Profile</h1>
        </div>
        <div className="bottom">
          
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
                  <h3>Student ID</h3>
                  <span>{file.studentid}</span>
                </div>
                <div className="info-data">
                  <h3>Batch ID</h3>
                  <span>{file.batchid}</span>
                </div>
              <div className="info-data">
                  <h3>First Name</h3>
                  <span>{file.firstname}</span>
                </div>
                <div className="info-data">
                  <h3>Last Name name</h3>
                  <span>{file.lastname}</span>
                </div>
                <div className="info-data">
                  <h3>Date of birth</h3>
                  <span>{file.dob}</span>
                </div>
                <div className="info-data">
                  <h3>Email</h3>
                  <span>{file.email}</span>
                </div>
                <div className="info-data">
                  <h3>Mobile No</h3>
                  <span>{file.contactnumber}</span>
                </div>
                <div className="info-data">
                  <h3>Address</h3>
                  <span>{file.address}</span>
                </div>
                <div className="info-data">
                  <h3>Reg Date</h3>
                  <span>{file.registrationdate}</span>
                </div>
                <div className="info-data">
                  <h3>Leave Date</h3>
                  <span>{file.leavedate}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
