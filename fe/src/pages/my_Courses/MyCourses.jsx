import React from "react";
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

  function createData(Semester, CourseCode, Course, Credits) {
    return { Semester, CourseCode, Course, Credits };
  }

  const rows = [
    createData(
      "New BSc Eng. Semester - 1",
      "CS1032",
      "Programming Fundamentals",
      3.0
    ),
    createData(
      "New BSc Eng. Semester - 1",
      "CS1032",
      "Programming Fundamentals",
      3.0
    ),
    createData(
      "New BSc Eng. Semester - 1",
      "CS1032",
      "Programming Fundamentals",
      3.0
    ),
  ];

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>ABEGUNAWARDHANAUKKP.19</h1>
          <p>Intake 2019 (Intake)</p>
          <p>ABEGUNAWARDHANA U.K.K.P.</p>
          <p>UKGAHA KUMBURA KASUN PRAMUDITHA ABEGUNAWARDHANA</p>
        </div>

        <div className="bottom">
          <div className="grade-table" style={{ width: "100%" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Semester</StyledTableCell>
                    <StyledTableCell align="right">CourseCode</StyledTableCell>
                    <StyledTableCell align="right">Course</StyledTableCell>
                    <StyledTableCell align="right">Credits</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Semester}>
                      <StyledTableCell component="th" scope="row">
                        {row.Semester}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.CourseCode}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.Course}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.Credits}
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
