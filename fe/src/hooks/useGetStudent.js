import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetstudents() {
    const [students, setStudents] = useState([])
  
    useEffect(() => {
        axios
          .get(`${config.REACT_APP_API}/api/student/sall/`)
          .then((response) => {
            setStudents(response.data);

          })
          .catch((error) => {
            console.log(error);
          });
    
      }, []);
  
    return students
  }