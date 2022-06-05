import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../config/config.json";
import useGetLevel from "../hooks/useGetLevel";

const AddCourse = ({ getCourses }) => {
  const levels = useGetLevel();
  const [level, setlevel] = useState("");
  const [coursename, setcoursename] = useState("");
  const [duration, setduration] = useState("");
  const [credit, setcredit] = useState("");
  const [description, setdescription] = useState("");

  
  const handleCourseName = (e) => {
    setcoursename(e.target.value);
  };

  const handleLevel = (e) => {
    setlevel(e.target.value);
  };

  const handleDuration = (e) => {
    setduration(e.target.value);
  };

  const handleCredit = (e) => {
    setcredit(e.target.value);
  };

  const handleDescription = (e) => {
    setdescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      levelId: level,
      courseName: coursename,
      description : description,
      duration: duration,
      credit: credit,
    };

    axios
      .post(`${config.REACT_APP_API}/api/course/`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        getCourses()
        setcoursename("");
        setdescription("");
        setlevel();
        setduration("");
        setcredit("");
        toast.success("Course Added", {
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
        <label htmlFor="coursename" className="form-label">
          Course Name
        </label>
        <input
          type="text"
          className="form-control"
          id="coursename"
          placeholder="Course Name"
          value={coursename}
          onChange={handleCourseName}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="level" className="form-label">
          Level
        </label>
        <select
          id="level"
          className="form-select"
          value={level}
          onChange={handleLevel}
        >
          <option defaultChecked>Choose...</option>
          {levels.map((level) => (
            <option key={level.levelid} value={level.levelid}>
              {level.levelname}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <label htmlFor="duration" className="form-label">
          Course Duration
        </label>
        <input
          type="number"
          className="form-control"
          id="duration"
          placeholder="No of weeks"
          value={duration}
          onChange={handleDuration}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="credit" className="form-label">
          Credit
        </label>
        <input
          type="number"
          className="form-control"
          id="credit"
          placeholder="Credit"
          value={credit}
          onChange={handleCredit}
        />
      </div>

      <div className="col-md-8">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="description"
          value={description}
          onChange={handleDescription}
        />
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={handleSubmit}
        >
          Add Course
        </button>
      </div>
    </form>
  );
};

export default AddCourse;
