import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetLevel() {
    const [levels, setLevels] = useState([])
  
    useEffect(() => {
        axios
        .get(`${config.REACT_APP_API}/api/level/LevelDetails/`)
        .then((response) => {
          setLevels(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
      }, []);
  
    return levels;
  }