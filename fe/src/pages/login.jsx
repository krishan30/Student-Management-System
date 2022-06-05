import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submit, setSubmit] = useState(false);

  return (
    <div
      className="d-flex text-center justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className=" col-3">
        <div className="card shadow-lg p-4">
          <Helmet>
            <title>Login</title>
            <meta name="description" />
          </Helmet>

          <h2 className="mb-4">Login</h2>

          {/* Form */}

          <form>
            <div className="form-group mb-4">
              <input
                className={
                  !errors["emailAddress"]
                    ? submit
                      ? "form-control is-valid"
                      : "form-control"
                    : "form-control is-invalid"
                }
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                {...register("emailAddress", {
                    required: true,
                    pattern:
                      //eslint-disable-next-line
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
              />
            </div>

            <div className="form-group mb-4">
              <input
                name="password"
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />

            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                //   onClick={handleSubmit(onSubmit)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
