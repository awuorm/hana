import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { StyledRegister } from "../styles";
// import logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";

export const Register = props => {
  console.log("props from Login", props);
  const { userDetails } = props;

  return (
    <StyledRegister>
       <h1>
        <s>hana</s>
      </h1>
      <div>
        <Formik
          initialValues={userDetails}
          validate={userDetails => {
            let errors = {};
            if (!userDetails.email) {
              errors.email = "Please provide an email!";
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
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              {/* <h4>Register details to continue</h4> */}
              <input
                value={values.email}
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
              <span
                style={{
                  color: "red",
                  background: "rgba(255, 255, 255, 0.0)",
                  padding: "0.5em",
                  margin: "0.5em"
                }}
              >
                {" "}
                {errors.email && touched.email && errors.email}
              </span>
              <input
                value={values.password}
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
              <span
                style={{
                  color: "red",
                  background: "rgba(255, 255, 255, 0.0)",
                  padding: "0.5em",
                  margin: "0.5em"
                }}
              >
                {" "}
                {errors.password && touched.password && errors.password}
              </span>
              <button
                type="submit"
                onClick={() => {
                  store.addNotification({
                    title: "Registering?",
                    message: "A moment while we record your details",
                    type: "info", // 'default', 'success', 'info', 'warning'
                    container: "top-right", // where to position the notifications
                    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
                    animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
                    dismiss: {
                      duration: 3000
                    }
                  });
                }}
                disabled={isSubmitting}
              >
                REGISTER
              </button>
              <p>Forgot your password?</p>
              <h4>WELCOME</h4>
              <h5>Don't you have an account?</h5>
              <NavLink to="/login">Login</NavLink>
            </form>
          )}
        </Formik>
      </div>
      {/* <p>
        <span>or <br/></span>
        
      </p> */}
    </StyledRegister>
  );
};

export default connect(state => state, actionCreators)(Register);
