import React from "react";

const AddTimeTable = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="batch" className="form-label">
          Batch ID
        </label>
        <input
          type="text"
          className="form-control"
          id="batch"
          placeholder="batch ID"
          //   value={product}
          //   onChange={handleProductChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="releaseDate" className="form-label">
          Release Date
        </label>
        <input
          type="Date"
          className="form-control"
          id="releaseDate"
          placeholder="Release Date"
          //   value={unitPrice}
          //   onChange={handleUnitPriceChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="formFile" className="form-label">
          Input Timetable file
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>

      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          //   onClick={handleSubmit}
        >
          Add TimeTable
        </button>
      </div>
    </form>
  );
};

export default AddTimeTable;
