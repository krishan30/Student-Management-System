import React, { useEffect, useState } from "react";
import "./my_courses.scss";
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

const MyCourses = () => {
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
const [rows,setRows]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get("http://localhost:5000/api/course/1");
      setRows(response.data)
      //console.log(response.data)
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

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topl">
          <h1>My courses</h1>
        </div>
        <div className="bottom">
          <div className="grade-table" style={{ width: "100%" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Semester</StyledTableCell>
                    <StyledTableCell>CourseCode</StyledTableCell>
                    <StyledTableCell>Course</StyledTableCell>
                    <StyledTableCell>Duration</StyledTableCell>
                    <StyledTableCell>Credits</StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.courseid}>
                      <StyledTableCell component="th" scope="row">
                        {row.levelid}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.courseid}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.coursename}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.duration}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.credit}
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
  );
};

export default MyCourses;
