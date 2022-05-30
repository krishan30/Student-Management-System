import React from "react";
import AddCourseToStudent from "../../components/addCourseToStudent";
import AddTeacher from "../../components/addTeacher";

const AdminTeacher = () => {
  return (
    <div className="mt-2">
      <div className="row accordion accordion-flush" id="accordionFlushTeacher">
        <div className="accordion-item col-9">
          <h2 className="accordion-header" id="flush-headingOneTeacher">
            <button
              className="accordion-button text-white fw-bold collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOneTeacher"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Add Teacher
            </button>
          </h2>
          <div
            id="flush-collapseOneTeacher"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            // data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <AddTeacher />
            </div>
          </div>
        </div>
        <div className="accordion-item col-3">
          <h2 className="accordion-header" id="flush-headingOneTeacher2">
            <button
              className="accordion-button text-white fw-bold collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOneTeacher2"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Add Course to Teacher
            </button>
          </h2>
          <div
            id="flush-collapseOneTeacher2"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            // data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <AddCourseToStudent />
            </div>
          </div>
        </div>
      </div>

      <div className="m-3 mt-1 h-100 overflow-auto">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Contact Num</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">NIC</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Leave Date</th>
              <th scope="col">Courses</th>
            </tr>
          </thead>
          {/* <tbody>{renderTable()}</tbody> */}
        </table>
      </div>
    </div>
  );
};

export default AdminTeacher;
