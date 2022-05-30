import React from "react";
import AddStudent from "../../components/addStudent";

const AdminStudent = () => {
  return (
    <div className="mt-2">
      <div className="accordion accordion-flush" id="accordionFlushStudent">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOneStudent">
            <button
              className="accordion-button text-white fw-bold collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOneStudent"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Add Student
            </button>
          </h2>
          <div
            id="flush-collapseOneStudent"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <AddStudent/>
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
              <th scope="col">BatchID</th>
              <th scope="col">Contact Num</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">NIC</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Leave Date</th>
            </tr>
          </thead>
          {/* <tbody>{renderTable()}</tbody> */}
        </table>
      </div>
    </div>
  );
};

export default AdminStudent;
