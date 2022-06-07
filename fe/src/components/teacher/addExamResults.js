import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config.json";
// import { Container, Row, Col, Button } from "react-bootstrap";

const ExamResult = () => {
  const [teacherId, useTeacherId] = useState(1); // teacher id : from session set this.......................
  const [studentid, setstudentid] = useState();
  const [batchid, setBatchId] = useState();
  const [courses, setcourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [grade, setGrade] = useState();
  const [allGrades, setAllGrades] = useState([]);
  const [date, setDate] = useState();
  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}/api/grade/GradeDetails`)
      .then((res) => {
        setAllGrades(res.data);
        console.log("all grades= ", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    
    const now = new Date();
    const date1 =
      now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    const time =
      now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    const currrentDateTime = date1 + " " + time;
    setDate(currrentDateTime);
    console.log(currrentDateTime);

    e.preventDefault();
   
    const payload = {
      courseId: selectedCourse,
      teacherId: localStorage.getItem('teacherid'),
      releaseDate: currrentDateTime,
      batchId: batchid,
      grade: grade,
      studentId: studentid,
    };

    console.log("payload", payload);
    axios.post(`${config.REACT_APP_API}/api/result/ResultDetails`, payload).then(
      (response) => {
        console.log(response);
        setstudentid("");
        setBatchId("");
        setcourses([]);
      },
      (error) => {
        console.log(error);
      }
    );
    
  };

  const handlecourseselect = (e) => {
    console.log("selectde course = ", e.target.value);
    setSelectedCourse(e.target.value);
    axios
      .get(
        `${config.REACT_APP_API}/api/result/FindResult/${e.target.value}/${studentid}`
      )
      .then((res) => {
        // setAllGrades(res.data);
        console.log(" result already exist= ", res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleGradeSelect = (e) => {
    console.log("selected grade", e.target.value);
    setGrade(e.target.value);
  };

  const handlestudentid = (e) => {
    setstudentid(e.target.value);
    console.log("student id = ", e.target.value);

    axios
      .get(`${config.REACT_APP_API}/api/student/sc/${e.target.value}`)
      .then((res) => {
        console.log(res);
        console.log("student data= ", res.data);
        setBatchId(res.data.batchid);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${config.REACT_APP_API}/api/course/${e.target.value}`)
      .then((response) => {
        setcourses(response.data);
        console.log("student courses= ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h3 className="text-center">ADD RESULTS</h3>
      <form className="text-end ">
        <div className="row p-3">
          <div className="col-4 my-2"><label htmlFor="studentid">Student ID</label></div>
          <div className="col-4"> <input type="text" className="form-control" placeholder="Student ID" id="studentid"  value={studentid} onChange={handlestudentid} /></div>
        </div>
        <div className="row p-3">
          <div className="col-4 my-2"><label htmlFor="courses">Module</label></div>
          <div className="col-4"> <select className="form-select" id="courses" onChange={handlecourseselect}> <option value={"0"}>Choose module</option> {courses.length > 0 && courses?.map((c) => ( <option key={c.courseid} value={c.courseid}> {c.coursename} </option> ))} </select></div>
        </div>
        <div className="row p-3">
          <div className="col-4 my-2"> <label htmlFor="courses">Grade</label></div>
          <div className="col-4"> <select className="form-select" id="courses" onChange={handleGradeSelect}> <option value={"0"}>Choose grade</option> {allGrades.length > 0 && allGrades?.map((g) => ( <option key={g.gradeid} value={g.gradeid}> {g.gradename} </option> ))} </select></div>
        </div>
        <div className="row p-3">
          <div className="col-4 my-2"> <label htmlFor="studentid">Batch Id</label></div>
          <div className="col-4"><input type="text" className="form-control" placeholder="Batch ID" id="batchid" value={batchid}/></div>
        </div>
        <div className="d-flex justify-content-center m-2">
          <button className="btn btn-primary" onClick={handleSubmit}>
          ADD RESULT
          </button>
        </div>
      </form>

      <hr />
    </>
  );
};

export default ExamResult;
