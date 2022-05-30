import React from "react";

const AddCourseToStudent = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="teacherID" className="form-label">
          TeacherID
        </label>
        <select
          id="teacherID"
          className="form-select"
          // value={teacherID}
          // onChange={handleSupplierChange}
        >
          <option defaultChecked>Choose...</option>
          {/* {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.Name}
              </option>
            ))} */}
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="courseID" className="form-label">
          CourseID
        </label>
        <select
          id="courseID"
          className="form-select"
          // value={courseID}
          // onChange={handleSupplierChange}
        >
          <option defaultChecked>Choose...</option>
          {/* {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.Name}
              </option>
            ))} */}
        </select>
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          //   onClick={handleSubmit}
        >
          Add Course
        </button>
      </div>
    </form>
  );
};

export default AddCourseToStudent;
