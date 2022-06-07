import "./my_courses.scss";
import { DataGrid } from "@mui/x-data-grid";

import { useState,useEffect } from "react";
import api from "../../services/api"
import config from "../../config/config.json";

export const userColumns = [

    { field: "courseid", headerName: "ID", width: 70 },
    {
      field: "levelid",
      headerName: "Level Code	",
      width: 100,
    },
    {
      field: "coursename",
      headerName: "Course Name",
      width: 680,
    },
  
    {
      field: "credit",
      headerName: "Credits",
      width: 100,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 100,
    }
  ];
  


const DatatableMyCourses = () => {

  const handleDelete = (row) => {
    setData(data.filter((item) => item.courseid !== row.courseid));
    api.put('/api/enrollment/unenroll/'+row.courseid, {
        StudentId:localStorage.getItem('studentid'),
        CourseId:row.courseid,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${config.REACT_APP_API}/api/course/${localStorage.getItem('studentid')}`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };
    fetchData()
  },[]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Enroll</div>
            </Link> */}
            <div
              className="viewButton"
              onClick={() => handleDelete(params.row)}
            >
              Unenroll
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(data) => data.courseid}
      />
    </div>
  );
};
export default DatatableMyCourses;