import React from "react";
import { StyledAuth } from "../styles";
import {Formik} from "formik";

const Register = (props) => {
  let userDetails = { username: "", password: "" };
  return (
    <StyledAuth>
      <h1>
        <s>hana</s>
      </h1>
      <div className="auth-forms">
        <Formik
          initialValues={userDetails}
          validate={(userDetails) => {
            let errors = {};
            if (!userDetails.username) {
              errors.username = "Please provide a username!";
            }
            if (!userDetails.password) {
              errors.password = "Please provide a password!";
            } else if (userDetails.password.length < 9) {
              errors.password = "Your password must be more than 8 characters!";
            } else if (userDetails.password.length > 11) {
              errors.password =
                "Your password must be less than 12 characters!";
            }
            return errors;
          }}
          onSubmit={(userDetails, actions) => {
            props.postRegister(userDetails, props);
            console.log(userDetails);
            actions.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h4>Register to continue</h4>
              <label>Username</label>
              <input
                value={values.username}
                type="text"
                name="username"
                onChange={handleChange}
              />
              <span
                style={{
                  color: "red",
                  background: "rgba(255, 255, 255, 0.0)",
                  padding: "0.5em",
                  margin: "0.5em",
                }}
              >
                {" "}
                {errors.username && touched.username && errors.username}
              </span>
              <label>Password</label>
              <input
                value={values.password}
                type="password"
                name="password"
                onChange={handleChange}
              />
              <span
                style={{
                  color: "red",
                  background: "rgba(255, 255, 255, 0.0)",
                  padding: "0.5em",
                  margin: "0.5em",
                }}
              >
                {" "}
                {errors.password && touched.password && errors.password}
              </span>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </StyledAuth>
  );
};

export default Register;
