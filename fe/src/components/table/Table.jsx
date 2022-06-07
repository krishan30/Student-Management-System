import React, { useEffect, useState } from "react";
import "./table.scss";
import api from "../../services/api"
import { Link } from "react-router-dom";
import config from "../../config/config.json";


const List = () => {
  const [courses, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${config.REACT_APP_API}/api/course/${localStorage.getItem('studentid')}`);
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
  // const courses = [
  //   {
  //     id: 1,
  //     dep: "Eng-MATH",
  //     name: " Course is starredCourse nameIn19-S4-MA2063 - Differential Equations and Applications",
  //   },
  //   {
  //     id: 2,
  //     dep: "Eng-MATH",
  //     name: "Course is starredCourse nameIn19-S4-CS3953 - Technical Writing",
  //   },
  //   {
  //     id: 3,
  //     dep: "Eng-MATH",
  //     name: " Course is starredCourse nameIn19-S4-MA2033 - Linear Algebra",
  //   },
  //   {
  //     id: 4,
  //     dep: "Eng-MATH",
  //     name: " Course is starredCourse nameIn19-S4-CS3022 - Software Engineering",
  //   },
  //   {
  //     id: 5,
  //     dep: "Eng-MATH",
  //     name: " Course is starredCourse nameIn19-S4-CS3042 - Database Systems",
  //   },
  // ];
  return (
    <ul className="list-group">
      {courses.map((data) => (
        <li key={data.courseid} className="list-group-item">
          <div className="crs-id">
            <p>{data.levelid}</p>
          </div>
          <Link to = '/course' style={{ textDecoration: "none" }}>
          <p className="crs-name">{data.coursename}</p>
        </Link>
            
         
        </li>
      ))}
    </ul>
  );
};

export default List;
