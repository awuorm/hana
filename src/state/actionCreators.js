import * as types from "./actionTypes";
import axios from "axios";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import axiosWithAuth from "../utils/axiosWithAuth";

export const registrationError = error => {
  return { type: types.REGISTRATION_ERROR, payload: error.message };
};

export const postRegister = (userDetails, props) => dispatch => {
  console.log("props from register", userDetails, props);
  axios
    .post("https://friend-finder-backend.herokuapp.com/api/auth/register", userDetails)
    .then(res => {
      store.addNotification({
        title: "Registration successful!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(res);
      dispatch({ type: types.POST_REGISTRATION, payload: res.data });
      props.history.push("/login");
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(error);
      dispatch(registrationError(error.message));
    });
};

export const loginError = error => {
  return { type: types.LOGIN_ERROR, payload: error.message };
};

export const postLogin = (userDetails, props) => dispatch => {
  console.log("props from register", userDetails, props);
  axios
    .post("https://friend-finder-backend.herokuapp.com/api/auth/login", userDetails)
    .then(res => {
      console.log(res);
      store.addNotification({
        title: "Login successful!",
        message: res.data.success,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      dispatch({ type: types.POST_LOGIN, payload: res.data });
      props.history.push("/home");
      window.localStorage.setItem("token", res.data.token);
    })
    .catch(error => {
      store.addNotification({
        title: "Something went terribly wrong",
        message: error.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      console.log(error);
      dispatch(loginError(error.message));
    });
};
