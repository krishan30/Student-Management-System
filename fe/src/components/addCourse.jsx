import React from "react";

const AddCourse = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="courseName" className="form-label">
          Course Name
        </label>
        <input
          type="text"
          className="form-control"
          id="courseName"
          placeholder="Course Name"
        //   value={date}
        //   onChange={handleDateChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="level" className="form-label">
          Level ID
        </label>
        <input
          type="text"
          className="form-control"
          id="level"
          placeholder="Level ID"
        //   value={product}
        //   onChange={handleProductChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="duration" className="form-label">
          Course Duration
        </label>
        <input
          type="Date"
          className="form-control"
          id="duration"
          placeholder="Unit Price"
        //   value={unitPrice}
        //   onChange={handleUnitPriceChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="credit" className="form-label">
          Credit
        </label>
        <input
          type="Number"
          className="form-control"
          id="credit"
          placeholder="Credit"
        //   value={unitPrice}
        //   onChange={handleUnitPriceChange}
        />
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

export default AddCourse;
