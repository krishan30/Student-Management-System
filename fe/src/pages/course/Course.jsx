import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./course.scss";
import api from "../../services/api";
import config from "../../config/config.json";
import { useParams } from 'react-router-dom';

const Course = () => {
    const { courseId } = useParams();
    console.log(courseId)
 
    const [course,setRows]=useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get(`${config.REACT_APP_API}/api/course/find/${courseId}`);
          setRows(response.data)
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
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="topl">
          <h1>{course.coursename}</h1>
        </div>
        <div className="widgets">
        </div>

        <div className="listContainer">
          <div className="listTitle">{course.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
