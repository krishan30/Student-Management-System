import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../config/config.json";
import useGetTeachers from "../hooks/useGetTeachers";
import useGetCourses from "../hooks/useGetCourses";

const AddCourseToStudent = () => {
  const teachers = useGetTeachers();
  const courses = useGetCourses();
  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");

  const handleTeacher = (e) => {
    setTeacher(e.target.value);
  };

  const handleCourse = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      courseId: course,
      teacherId: teacher,
      availabilityId:1
    };

    console.log(payload);
    axios
      .post(`${config.REACT_APP_API}/api/teach`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setCourse("");
        setTeacher("");
        toast.success("Course to the Teacher Added", {
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
      <div className="col-md-6">
        <label htmlFor="teacher" className="form-label">
          Teacher
        </label>
        <select
          id="teacher"
          className="form-select"
          value={teacher.teacherid}
          onChange={handleTeacher}
        >
          <option defaultChecked>Choose...</option>
          {teachers.map((teacher) => (
            <option key={teacher.teacherid} value={teacher.teacherid}>
              {teacher.teacherid} {teacher.firstname}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="course" className="form-label">
          Course
        </label>
        <select
          id="course"
          className="form-select"
          value={course.courseid}
          onChange={handleCourse}
        >
          <option defaultChecked>Choose...</option>
          {courses.map((course) => (
            <option key={course.courseid} value={course.courseid}>
              {course.courseid}
              {course.firstname}
            </option>
          ))}
        </select>
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

export default AddCourseToStudent;
