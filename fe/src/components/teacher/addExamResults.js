import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ExamResult = () => {
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
      result: [{ module: "module1", marks: 75 }],
      courseid: ["module1"],
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
      result: [{ module: "module1", marks: 75 }],
      courseid: ["module1", "module2"],
    },
    {
      studentid: 3,
      batchid: 2,
      firstname: "abinesh",
      lastname: "thaventhirarajah",
      contactnumber: "0778229654",
      address: "No 23, Third street,Alvaai",
      nic: "997121789V",
      email: "abinesh@gmail.com",
      result: [
        { module: "module1", marks: 75 },
        { module: "module2", marks: 85 },
        { module: "module3", marks: 100 },
      ],
      courseid: ["module1", "module2", "module3"],
    },
    {
      studentid: 2,
      batchid: 2,
      firstname: "laksi",
      lastname: "tharmalingam",
      contactnumber: "0771144569",
      address: "No 23, Fourth street,Kilinochi",
      nic: "997121789V",
      email: "laksi@gmail.com",
      result: [
        { module: "module1", marks: 75 },
        { module: "module2", marks: 85 },
        { module: "module3", marks: 100 },
        { module: "module4", marks: 100 },
      ],
      courseid: ["module1", "module2", "module3", "module4"],
    },
  ];

 
  const [studentid, setstudentid] = useState();
  const [courses, setcourses] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const [existMarks, setExistMarks] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      studentid,
      name,
      module,
      marks,
    };

    console.log("payload", payload);
  };

  const handlecourseselect = (e) => {
    console.log(e.target.value);
    // setModule(e.target.value);
    let module = e.target.value;
    let res = data.filter((res) => res.studentid == studentid)[0].result;
    res = res.filter((result) => result.module == module)[0];

    console.table("Res", res);
    if (res) {
      setIsDisabled(true);
      setIsExist(true);
      setMarks(res.marks);
      setExistMarks(res.marks);
    } else {
      setIsExist(false);
      setIsDisabled(false);
      setMarks("");
    }
  };

  const handleMarks = (e) => {
    setMarks(e.target.value);
  };

  const handlestudentid = (e) => {
    setstudentid(e.target.value);
    setIsExist(false);

    let courses = data.filter((d) => d.studentid == e.target.value);
    if (courses.length > 0) {
      setcourses(courses[0]?.courseid);
      setName(courses[0]?.firstname);
    } else {
      setcourses([]);
      setName("");
      setMarks("");
    }
  };

  return (
    <>
    <h1>ADD RESULTS</h1>
      <form>
        <div className="row m-0 my-3">
          <div className="col-3">
            <label htmlFor="studentid">Student ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Student ID"
              aria-label="Student ID"
              id="studentid"
              value={studentid}
              onChange={handlestudentid}
            />
          </div>

          <div className="col-3">
            <label htmlFor="courses">Module</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="courses"
              onChange={handlecourseselect}
            >
              <option value={"0"}>Choose module</option>
              {courses.length > 0 &&
                courses?.map((module) => (
                  <option key={module} value={module}>
                    {module}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="row m-0 my-3">
          <div className="col-3">
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              aria-label="First name"
              id="name"
              disabled
            />
          </div>
          {isExist ? (
            <div className="col-4">
              <label htmlFor="marks" className="text-danger">
              </label>

              <div class="input-group">
                <input
                  type="number"
                  className="form-control"
                  max={100}
                  min={0}
                  value={marks}
                  onChange={handleMarks}
                  disabled={isDisabled}
                  placeholder="Marks"
                  aria-label="Marks"
                  id="marks"
                />
                <button
                  class="btn btn-outline-secondary shadow-none"
                  type="button"
                  id="button-addon2"
                  onClick={(e) => {
                    if (isDisabled) {
                      setIsDisabled(false);
                    } else {
                      setIsDisabled(true);
                      setMarks(existMarks);
                    }
                    console.log("e", e.target.value);
                  }}
                >
                  {isDisabled ? "Edit" : "Cancel"}
                </button>
              </div>
            </div>
          ) : (
            <div className="col-3">
              <label htmlFor="marks">Marks</label>
              <input
                type="number"
                max={100}
                min={0}
                value={marks}
                onChange={handleMarks}
                className="form-control"
                placeholder="Marks"
                aria-label="Marks"
                id="marks"
              />
            </div>
          )}
        </div>

        <div className="d-flex justify-content-end m-2">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Save
          </button>
        </div>
      </form>

      <hr />
      <p>Student Id : {studentid}</p>
      <p>First Name : {name}</p>
      <p>Marks : {marks}</p>
    </>
  );
};

export default ExamResult;
