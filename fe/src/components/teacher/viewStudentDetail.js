import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config.json";

const StudentDetail = () => {


  const [data, setData] = useState([]);
  const [stuId, setStuId] = useState("");
  const [batchid, setBatchId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [isExist, setIsExist] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}/api/student/sall`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStuId = (e) => {
    setStuId(e.target.value);

    let modules = [];
    if (e.target.value == "") {
      setIsExist(true);
      setBatchId("");
      setFirstName("");
      setLastName("");
      setContactNumber("");
      setAddress("");
      setNic("");
      setEmail("");
    } else {
      modules = data.filter((d) => d.studentid == e.target.value);
      console.log(e.target.value);
      if (modules.length > 0) {
        setBatchId(modules[0]?.batchid);
        setFirstName(modules[0]?.firstname);
        setLastName(modules[0]?.lastname);
        setContactNumber(modules[0]?.contactnumber);
        setAddress(modules[0]?.address);
        setNic(modules[0]?.nic);
        setEmail(modules[0]?.email);
        setIsExist(true);
      } else {
        setIsExist(false);
        setBatchId("");
        setFirstName("");
        setLastName("");
        setContactNumber("");
        setAddress("");
        setNic("");
        setEmail("");
      }
    }
  };

  return (
    <>
      <form>
        <h4 className="text-center">ENTER STUDENT ID HERE</h4>
        <div className="row m-0 my-3 text-end">
          {/* <div className="col-4">  */}
          <div className="col-4"> <label htmlFor="stuId">Student ID</label></div> 
          <div className="col-4"> <input
              type="text"
              className="form-control"
              placeholder="Student ID"
              aria-label="Student ID"
              id="stuId"
              value={stuId}
              onChange={handleStuId}
            /></div> 
          {/* </div> */}


         
        </div>

        <div className="row">
          <div className="col-3"></div>
        <div
            className={
              isExist === false
                ? " alert alert-danger col-5 my-3 text-center "
                : " alert alert-success d-none col-3 my-3"
            }
            role="alert"
          >
            Student Id is Not Exist!
          </div>
        </div>
      </form>

      <h4 className="text-center">STUDENT DETAIL</h4>

      <div className="p-1">
        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Student ID</label>
          </div>
          <div className="col-4">
            <input
              placeholder={stuId}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Batch ID</label>
          </div>
          <div className="col-4">
            <input
              placeholder={batchid}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">First Name</label>
          </div>
          <div className="col-4">
            <input
              placeholder={firstname}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Last Name</label>
          </div>
          <div className="col-4">
            <input
              placeholder={lastname}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Contact Number</label>
          </div>
          <div className="col-4">
            <input
              placeholder={contactNumber}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Address</label>
          </div>
          <div className="col-4">
            <input
              placeholder={address}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">NIC</label>
          </div>
          <div className="col-4">
            <input
              placeholder={nic}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>

        <div className="row g-3 align-items-center text-end my-2">
          <div className="col-4">
            <label className="col-form-label">Email</label>
          </div>
          <div className="col-4">
            <input
              placeholder={email}
              type="text"
              className="form-control"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;
