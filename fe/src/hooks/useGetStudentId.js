import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetstudentId() {
    const [studentId, setstudentId] = useState()
    const userid = localStorage.getItem('userId');
  
    useEffect(() => {
        axios
        .get(`${config.REACT_APP_API}/api/student/scui/${userid}`)
        .then((response) => {
          setstudentId(response.data.studentId);
          localStorage.setItem('studentid',response.data['studentid'])
        })
        .catch((error) => {
          console.log(error);
        });
    
      }, []);
  
    return studentId;
  }