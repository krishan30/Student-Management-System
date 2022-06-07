import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetBatch() {
    const [allBatch, setAllBatch] = useState([])
  
    useEffect(() => {
        axios
        .get(`${config.REACT_APP_API}/api/batch/BatchDetails/`)
        .then((response) => {
          setAllBatch(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
      }, []);
  
    return allBatch
  }