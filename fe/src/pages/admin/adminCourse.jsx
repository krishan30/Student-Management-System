import React from "react";
import AddCourse from "../../components/addCourse";

const AdminCourse = () => {
  return (
    <div className="mt-2">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button text-white fw-bold collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Add Course
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <AddCourse/>
            </div>
          </div>
        </div>
      </div>

      <div className="m-3 mt-1 h-100 overflow-auto">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">LevelID</th>
              <th scope="col">CourseName</th>
              <th scope="col">Duration</th>
              <th scope="col">Credit</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {/* <tbody>{renderTable()}</tbody> */}
        </table>
      </div>
    </div>
  );
};

export default AdminCourse;
