import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { StageSpinner } from "react-spinners-kit";
import AddCourse from "../../components/addCourse";
import { paginate } from "../../helper/paginate";
import Pagination from "../../components/Pagination";
import config from "../../config/config.json";

const AdminCourse = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(5);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    setCourses(paginate(data, currentPage, pageSize));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
    setCourses(paginate(data, currentPage, pageSize));
  };

  const getCourses = () => {
    axios
      .get(`${config.REACT_APP_API}/api/course/`)
      .then((response) => {
        setData(response.data);
        setCourses(paginate(response.data, currentPage, pageSize));
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);

        toast.error("Something went wrong!", {
          toastId : "1",
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
    return courses.map((course, i) => {
      return (
        <tr key={course.courseid}>
          <td>{course.courseid}</td>
          <td>{course.levelid}</td>
          <td>{course.coursename}</td>
          <td>{course.description}</td>
          <td>{course.duration}</td>
          <td>{course.credit}</td>
          <td>
            <EditIcon className="text-warning mx-2" />
            <DeleteIcon className="text-danger" />
          </td>
        </tr>
      );
    });
  };

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
              <AddCourse getCourses={getCourses} />
            </div>
          </div>
        </div>
      </div>

      {isLoaded ? (
        data.length > 0 ? (
          <div className=" mt-1 h-100 overflow-auto ">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">LevelID</th>
                  <th scope="col">CourseName</th>
                  <th scope="col">Description</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Credit</th>
                  <th scope="col"></th>
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
            <h2 className="text-muted">No Courses found</h2>
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

export default AdminCourse;
