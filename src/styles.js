import styled from "styled-components";
// import leaves from "./imgs/leaves.png";
import blobshape from "./imgs/blobshape.svg";

export const StyledApp = styled.div`
height: 100vh;
width:100vw;
overflow-y:auto;
background-color: black;
color: aliceblue;
font-family: 'Roboto Slab', serif;

`;

export const StyledLandingPage = styled.div`
height: 100%;
width:100%;
overflow-y:auto;
background-color: black;
color: aliceblue;
font-family: 'Roboto Slab', serif;
h1 {
    s {
        padding: 1.5em;    
    }
}
.words {
    border: 1px solid aliceblue;
    width:70%;
    margin-left:15%;
    height:60%;
    margin-top:10%;

    p {
        font-size: 2em;
        padding:1em;
        font-family: 'Liu Jian Mao Cao', cursive;
    }

    button {
        background-color: aliceblue;
        color: black;
        height: 10%;
        width:15%;
        padding:0.5em;
        margin-left: 40%;
        border: none;
        font-size: 1.2em;
    }
}
`;