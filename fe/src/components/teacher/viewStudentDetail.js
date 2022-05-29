import React, { useState } from "react";
const StudentDetail = () => {
  const data = [
    {
      studentid: 1,
      batchid: 2,
      firstname: "kesavi",
      lastname: "aravinthan",
      contactnumber: "0778899654",
      address: "No 23, Second street,Jaffna",
      nic: "997121789V",
      email: "kesavi@gmail.com",
    },
    {
      studentid: 2,
      batchid: 2,
      firstname: "abinesh",
      lastname: "thaventhirarajah",
      contactnumber: "0778229654",
      address: "No 23, Third street,Alvaai",
      nic: "997121789V",
      email: "abinesh@gmail.com",
    },
    {
      studentid: 3,
      batchid: 2,
      firstname: "laksi",
      lastname: "tharmalingam",
      contactnumber: "0771144569",
      address: "No 23, Fourth street,Kilinochi",
      nic: "997121789V",
      email: "laksi@gmail.com",
    },
  ];

  const [stuId, setStuId] = useState("");
  const [batchid, setBatchId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [isExist, setIsExist] = useState(true);

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
        <h1>ENTER STUDENT ID HERE</h1>
        <div className="row m-0 my-3">
          <div className="col-4">
            <label htmlFor="stuId">Student ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Student ID"
              aria-label="Student ID"
              id="stuId"
              value={stuId}
              onChange={handleStuId}
            />
          </div>

          <div
            className={
              isExist === false
                ? " alert alert-danger col-5 my-3 text-center"
                : " alert alert-danger d-none col-3 my-3"
            }
            role="alert"
          >
            Student Id is Not Exist!
          </div>
        </div>
      </form>

      <h1>STUDENT DETAIL</h1>

      <table>
        <thead>
          <th>Student ID</th>
          <th>{stuId} </th>
        </thead>
        <thead>
          <th>Batch ID</th>
          <th>{batchid} </th>
        </thead>
        <thead>
          <th>First Name </th>
          <th>{firstname}</th>
        </thead>
        <thead>
          <th>Last Name </th>
          <th>{lastname}</th>
        </thead>
        <thead>
          <th>Contact Number </th>
          <th>{contactNumber}</th>
        </thead>
        <thead>
          <th>Address</th>
          <th>{address}</th>
        </thead>
        <thead>
          <th>NIC</th>
          <th>{nic}</th>
        </thead>
        <thead>
          <th>Email</th>
          <th>{email}</th>
        </thead>
      </table>
    </>
  );
};

export default StudentDetail;
