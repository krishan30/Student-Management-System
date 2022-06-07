import React, { useEffect, useState } from "react";
import useGetNextUserId from "../hooks/useGetNextUserId";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../config/config.json";

const AddTeacher = ({getTeachers}) => {
  const userId = useGetNextUserId();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contactnum, setContactNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const registrationDate = new Date().toISOString().substring(0, 10);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleContactNum = (e) => {
    setContactNum(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleNIC = (e) => {
    setNIC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      userId: userId,
      userTypeId: 2,
      firstName: firstname,
      lastName: lastname,
      contactNumber: contactnum,
      address: address,
      NIC: nic,
      registrationDate: registrationDate,
      email: email,
      password:firstname
    };

    axios
      .post(`${config.REACT_APP_API}/api/teacher/tc`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        getTeachers();
        toast.success("Teacher Added", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          value={firstname}
          onChange={handleFirstName}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          value={lastname}
          onChange={handleLastName}
        />
      </div>


      <div className="col-md-4">
        <label htmlFor="contactNum" className="form-label">
          Contact Num
        </label>
        <input
          type="text"
          className="form-control"
          id="contactNum"
          placeholder="07xxxxxxxx"
          value={contactnum}
          onChange={handleContactNum}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="example@example.com"
          value={email}
          onChange={handleEmail}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          value={address}
          onChange={handleAddress}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="nic" className="form-label">
          NIC
        </label>
        <input
          type="text"
          className="form-control"
          id="nic"
          placeholder="nic"
          value={nic}
          onChange={handleNIC}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="registrationDate" className="form-label">
          Registration Date
        </label>
        <input
          type="Date"
          className="form-control"
          id="registrationDate"
          placeholder="Registration Date"
          value={registrationDate}
          disabled
        />
      </div>

      <div className="col-8 pt-4 text-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={handleSubmit}
        >
          Add Teacher
        </button>
      </div>
    </form>
  );
};

export default AddTeacher;
