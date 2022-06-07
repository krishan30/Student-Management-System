import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";
import Joi from 'joi-browser';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../config/config.json";

export default function Login() {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const { register } = useForm();
  const [userid, setuserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const schema = {
    userid: Joi.string().required().length(7).label("userid"),
    password: Joi.string().required().min(5).label("Password"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate({'userid':userid, 'password':password}, schema, options);
    const errors = {};

    if (error === null) return;
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      setErrors(errors)
    }else{
      setErrors({});
    }

    if (errors) {
      return;
    }

    let payload = {
      userId: userid,
      password: password,
    };

    axios
      .post(`${config.REACT_APP_API}/api/user/login/`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);

        try {
          const jwt = localStorage.getItem("token");
          const user = jwtDecode(jwt);

          localStorage.setItem("typeId", user.usertype);
          localStorage.setItem("userId", user.userid);
          const type = localStorage.getItem("typeId");
          if (type === "3") {
            window.location = "/Admin";
          } else if (type === "1") {
            window.location = "/";
          } else {
            window.location = "/teacher";
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
        } catch (error) {}
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid Login", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
      });
  };

  const handleChangeuserid = (e) => {
    setuserid(e.target.value);
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
                name="userid"
                type="text"
                id="userid"
                value={userid}
                onChange={handleChangeuserid}
                placeholder="userid"
              />
              {errors['userid'] && <div className="alert alert-danger text-start p-0 px-2 py-1">{errors['userid']}</div>}
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
               {errors['password'] && <div className="alert alert-danger text-start p-0 px-2 py-1">{errors['password']}</div>}
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
