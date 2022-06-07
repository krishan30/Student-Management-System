import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config.json";

export default function useGetNextUserId() {
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}/api/user/nextId/`)
      .then((response) => {
        setUserId(response.data.nextUserId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return userId;
}
