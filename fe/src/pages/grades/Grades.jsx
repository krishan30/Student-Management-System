import "./grades.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import api from "../../services/api";
import React, { useState, useEffect } from "react";
import config from "../../config/config.json";

const Grades = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${config.REACT_APP_API}/api/result/AllResult/${localStorage.getItem('studentid')}`);
        setRows(response.data);
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // function createData(name, grade) {
  //   return { name, grade };
  // }

  // const rows = [
  //   createData("In19-S4-CS2500 - Data Science and Engineering Challenge", 80),
  //   createData("In19-S4-CS3110 - Introduction to Machine Learning", 75),
  //   createData("In19-S4-CS3120 - Introduction to Data Science", 48),
  //   createData("In19-S4-CS3953 - Technical Writing", 58),
  //   createData("In19-S4-CS3042 - Database Systems", 64),
  // ];

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="topl">
          <h1>Grades</h1>
        </div>
        <div className="top">
        
          <div className="grade-table" style={{ width: "100%" }}>
          
            <div className="bottom">

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Course name</StyledTableCell>
                      <StyledTableCell align="right">Grade</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          {row.coursename}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.gradename}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
