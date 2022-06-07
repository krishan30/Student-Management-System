import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetTeacherId() {
    const [teacherId, setTeacherId] = useState()
    const userid = localStorage.getItem('userId');
  
    useEffect(() => {
        axios
        .get(`${config.REACT_APP_API}/api/teacher/ti/${userid}`)
        .then((response) => {
          setTeacherId(response.data.teacherId);
          localStorage.setItem('teacherid',response.data['teacherid'])
        })
        .catch((error) => {
          console.log(error);
        });
    
      }, []);
  
    return teacherId;
  }