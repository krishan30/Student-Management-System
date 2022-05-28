import React, { useState } from "react";



export default function Form() {
  const handleStudentID = (e) => {
    setStudentID(e.target.value);
  };

  const handleAnnouncement = (e) => {
    setAnnouncementText(e.target.value);
  };

  const [isSpecificStudent, setSpecificStudent] = useState(false);
  const [announcementType, setAnnouncementType] = useState(1);
  const [studentID, setStudentID] = useState("");
  const [announcementText, setAnnouncementText] = useState("");
  const handleChange = (e) => {
    setAnnouncementType(e.target.value);
    if (e.target.value == 3) {
      setSpecificStudent(true);
    } else {
      setSpecificStudent(false);
    }
  };

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    let payload = { announcementType, announcementText, studentID };

    console.log("payload", payload);
  };

  return (
    <React.Fragment>
      <form>
        <div className="row m-3 align-items-center">
          <div className="col-5">
            <label className="col-8">Type of Announcement</label>
          </div>
          <div className="col-6">
            <select className="form-select" onChange={handleChange}>
              <option value="1">Send To All Students</option>
              <option value="2">Send To My Course Students</option>
              <option value="3">Send To Particular Student</option>
            </select>
          </div>
        </div>

        <div
          className={
            isSpecificStudent === true
              ? " row m-3 align-items-center "
              : " row m-3 align-items-center d-none"
          }
        >
          <div className="col-5">
            <label className="col-8">Student ID</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              onChange={handleStudentID}
            ></input>
          </div>
        </div>

        <div className=" row form-floating m-3">
          <textarea
            className="form-control"
            style={{ height: "100px" }}
            onChange={handleAnnouncement}
          ></textarea>
        </div>
        <div className=" row form-floating m-3 d-flex justify-content-center ">
          <button
            type="button"
            className="btn btn-primary col-4 "
            onClick={handleAddAnnouncement}
          >
            Add Announcement
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
