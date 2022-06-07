import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StageSpinner } from "react-spinners-kit";
import { paginate } from "../../helper/paginate";
import Pagination from "../../components/Pagination";
import config from "../../config/config.json";
import AddCourseToStudent from "../../components/addCourseToStudent";
import AddTeacher from "../../components/addTeacher";

const AdminTeacher = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(4);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  useEffect(() => {
    setTeachers(paginate(data, currentPage, pageSize));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
    setTeachers(paginate(data, currentPage, pageSize));
  };

  const getTeachers = () => {
    axios
      .get(`${config.REACT_APP_API}/api/teacher/tall/`)
      .then((response) => {
        setData(response.data);
        setTeachers(paginate(response.data, currentPage, pageSize));
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
    return teachers.map((teacher, i) => {
      return (
        <tr key={teacher.teacherid}>
          <td>{teacher.userid}</td>
          <td>{teacher.firstname}</td>
          <td>{teacher.lastname}</td>
          <td>{teacher.contactnumber}</td>
          <td>{teacher.email}</td>
          <td>{teacher.address}</td>
          <td>{teacher.nic}</td>
          <td>{teacher.registrationdate.substring(0, 10)}</td>
          <td>{!teacher.leavedate ? "not leave" : teacher.leavedate}</td>
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
              <AddTeacher getTeachers={getTeachers} />
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

      {isLoaded ? (
        data.length > 0 ? (
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

export default AdminTeacher;
