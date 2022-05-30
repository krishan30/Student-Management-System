import React from "react";

const AddStudent = () => {
  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          //   value={date}
          //   onChange={handleDateChange}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          //   value={date}
          //   onChange={handleDateChange}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="batch" className="form-label">
          Batch ID
        </label>
        <input
          type="number"
          className="form-control"
          id="batch"
          placeholder="Batch ID"
          //   value={product}
          //   onChange={handleProductChange}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="contactNum" className="form-label">
          Contact Num
        </label>
        <input
          type="text"
          className="form-control"
          id="contactNum"
          placeholder="07xxxxxxxx"
          //   value={product}
          //   onChange={handleProductChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="example@example.com"
          //   value={product}
          //   onChange={handleProductChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          //   value={product}
          //   onChange={handleProductChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="nic" className="form-label">
          NIC
        </label>
        <input
          type="text"
          className="form-control"
          id="nic"
          placeholder="nic"
          //   value={unitPrice}
          //   onChange={handleUnitPriceChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="registrationDate" className="form-label">
          Registration Date
        </label>
        <input
          type="Date"
          className="form-control"
          id="registrationDate"
          placeholder="Registration Date"
          //   value={unitPrice}
          //   onChange={handleUnitPriceChange}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="leaveDate" className="form-label">
          Leave Date
        </label>
        <input
          type="Date"
          className="form-control"
          id="leaveDate"
          placeholder="leave Date"
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
          Add Student
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
