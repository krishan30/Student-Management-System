import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetTeachers() {
    const [teachers, setTeachers] = useState([])
  
    useEffect(() => {
        axios
          .get(`${config.REACT_APP_API}/api/teacher/tall/`)
          .then((response) => {
            setTeachers(response.data);

          })
          .catch((error) => {
            console.log(error);
          });
    
      }, []);
  
    return teachers
  }