import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json";
import { toast } from "react-toastify";

export default function useGetCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}/api/course/`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);

        toast.error("Something went wrong!", {
          toastId: "1",
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
      });
  }, []);

  return courses;
}
