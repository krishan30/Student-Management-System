import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Form() {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/`)
      .then((response) => {
        const courseNames = response.data.map(function (d) {
          return `${d.coursename}`;
        });
        setAllCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAnnouncement = (e) => {
    setAnnouncementBody(e.target.value);
  };

  const [announcementBody, setAnnouncementBody] = useState("");
  const [title, setTitle] = useState("");
  const [allCourses, setAllCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState(1); // teacher id : from session set this.......................

  const handleChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    let payload = {
      Title: title,
      CourseId: courseId,
      Body: announcementBody,
      TeacherId: teacherId,
    };
    console.log("payload", payload);
    
    axios.post(`http://localhost:5000/api/announcement/`, payload).then(
      (response) => {
        console.log(response);
        setTitle("");
        setAnnouncementBody("");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <React.Fragment>
      <h3 className="text-center">ADD ANNOUNCEMENT</h3>
      <form>
        <div className=" row m-3 align-items-center text-end">
          <div className="col-5"> <label className="">Title</label> </div>
          <div className="col-4"> <input type="text" className="form-control" value={title} onChange={handleTitle} ></input> </div>
        </div>
        <div className=" row m-3 align-items-center text-end">
          <div className="col-5"> <label className="">Course</label> </div>
          <div className="col-4"> <div className=""><select className="form-select" onChange={handleChange}><option value={"0"}>Choose module</option>{allCourses.length > 0 && allCourses?.map((c) => (<option key={c.courseid} value={c.courseid}>{c.coursename}</option>))}</select></div> </div>
        </div>
        <div className=" row m-3 align-items-center text-end">
          <div className="col-5"> <label className="">Body</label> </div>
          <div className="col-4"> <div className=" row form-floating"> <textarea className="form-control" style={{ height: "300px" }} value={announcementBody} onChange={handleAnnouncement}></textarea></div></div>
        </div>

        <div className=" row  m-3 d-flex justify-content-center ">
          <button
            type="button"
            className="btn btn-primary col-3 "
            onClick={handleAddAnnouncement}
          >
            Add Announcement
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
