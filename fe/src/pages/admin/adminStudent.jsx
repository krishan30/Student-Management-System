import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StageSpinner } from "react-spinners-kit";
import { paginate } from "../../helper/paginate";
import Pagination from "../../components/Pagination";
import AddStudent from "../../components/addStudent";
import config from "../../config/config.json";

const AdminStudent = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(4);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    setStudents(paginate(data, currentPage, pageSize));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
    setStudents(paginate(data, currentPage, pageSize));
  };

  const getStudents = () => {
    axios
      .get(`${config.REACT_APP_API}/api/student/sall/`)
      .then((response) => {
        setData(response.data);
        setStudents(paginate(response.data, currentPage, pageSize));
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);

        toast.error("Something went wrong!", {
          toastId: "1",
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
      });
  };

  const renderTable = () => {
    return students.map((student, i) => {
      return (
        <tr key={student.studentid}>
          <td>{student.userid}</td>
          <td>{student.firstname}</td>
          <td>{student.lastname}</td>
          <td>{student.batchid}</td>
          <td>{student.contactnumber}</td>
          <td>{student.email}</td>
          <td>{student.address}</td>
          <td>{student.nic}</td>
          <td>{student.registrationdate.substring(0, 10)}</td>
          <td>{!student.leavedate ? "not leave" : student.leavedate}</td>
          <td>
            <EditIcon className="text-warning mx-2" />
          </td>
          <td>
            <DeleteIcon className="text-danger" />
          </td>
        </tr>
      );
    });
  };

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
            data-bs-parent="#accordionFlushStudent"
          >
            <div className="accordion-body">
              <AddStudent getStudents={getStudents} />
            </div>
          </div>
        </div>
      </div>

      {isLoaded ? (
        data.length > 0 ? (
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
              <tbody>{renderTable()}</tbody>
            </table>
            <div className="d-flex">
              <div className="mx-auto">
                <Pagination
                  itemsCount={data.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center not-found">
            <h2 className="text-muted">No Students found</h2>
          </div>
        )
      ) : (
        <div className="w-100 not-found mt-5">
          <StageSpinner size={50} color="#5A2675" loading={true} />
          <br />
        </div>
      )}
    </div>
  );
};

export default AdminStudent;
