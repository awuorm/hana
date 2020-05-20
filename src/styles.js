import styled from "styled-components";
// import leaves from "./imgs/leaves.png";
import login_img from "./img/login_img.jpg";

export const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background-color: black;
  color: aliceblue;
  font-family: "Nanum Myeongjo", serif;
`;

export const StyledLandingPage = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: black;
  color: aliceblue;
  font-family: "Nanum Myeongjo", serif;
  h1 {
    s {
      padding: 1.5em;
    }
  }
  .words {
    border: 1px solid aliceblue;
    width: 70%;
    margin-left: 15%;
    height: 60%;
    margin-top: 10%;

    p {
      font-size: 2em;
      padding: 1em;
      font-family: "Nanum Pen Script", cursive;
    }

    .get-started {
      background-color: aliceblue;
      color: black;
      height: 10%;
      width: 15%;
      padding: 0.5em;
      margin-left: 40%;
      border: none;
      font-size: 1.2em;
      text-decoration: none;
    }
  }
`;

export const StyledRegister = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: black;
  color: aliceblue;
  font-family: "Nanum Myeongjo", serif;
  background-image: url(${login_img});
  background-repeat: no-repeat;
  background-size: cover;
  image-rendering: smooth;
  h1 {
    s {
      padding: 1.5em;
    }
  }
  div {
    border: 1px solid aliceblue;
    margin-left: 35vw;
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: baseline;
    text-align: center;
    height: 80vh;
    background-image: url(${login_img});
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: smooth;
    border-radius: 1em;
    /* margin-top: 10vh; */
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      margin-top: 15vh;
      input {
        border-radius: 1.5em;
        padding: 0.8em;
        border: none;
        text-align: center;
        font-size: 1em;
      }
      button {
        width: 10vw;
        padding: 0.8em;
        border: none;
        border-radius: 1.5em;
        background-color: white;
        font-weight: bold;
      }
      p {
        color: lightblue;
      }
      h4 {
        font-size: 1.3em;
        font-weight: normal;
        margin-bottom: 0;
      }
      h5 {
        font-size: 1em;
        font-weight: normal;
        margin-top: 15px;
        /* margin-bottom: 0; */
      }
       a {
        font-size: 1em;
        font-weight: normal;
        margin-top: 15px;
        color: black;
        text-decoration: none;
        background-color: white;
        width: 10vw;
        padding: 0.7em;
        border: none;
        border-radius: 1.5em;
        font-weight: bold;
       }
    }
  }
`;
