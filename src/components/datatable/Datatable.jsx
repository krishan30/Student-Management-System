import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import api from "../../services/api"

const Datatable = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const handleDelete = (row) => {
    setData(data.filter((item) => item.courseid !== row.courseid));
    api.post('/api/enrollment', {
      StudentId: 1,
        CourseId: row.courseid,
        EnrolledDate: date,
        FinishedDate: null,
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
        const response = await api.get("http://localhost:5000/api/course");
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
              Enroll
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

export default Datatable;
