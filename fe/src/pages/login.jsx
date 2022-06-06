import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../config/config.json";

export default function Login() {
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { register } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    let payload = {
        userId: email,
        password: password,
      };
  
      axios
        .post(`${config.REACT_APP_API}/api/user/login/`, payload, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
            console.log(res.data.accessToken);
            localStorage.setItem("token",res.data.accessToken);

            try {
              const jwt = localStorage.getItem("token");
              const user = jwtDecode(jwt);
              console.log(user);
              if (user.usertype===2) {
                navigate("/Admin");
              }else{
                navigate("/");
              }
            } catch (error) {
              
            }
          toast.success("Login Success", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
          });
  
        })
        .catch((err) => console.error(err));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className="d-flex text-center justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className=" col-md-3">
        <div className="card shadow-lg p-4">
          <Helmet>
            <title>Login</title>
            <meta name="description" />
          </Helmet>

          <h2 className="mb-4">Login</h2>

          {/* Form */}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <input
                className="form-control"
                name="email"
                type="text"
                id="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Email"
              />
            </div>

            <div className="form-group mb-4">
              <input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={handleChangePassword}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
