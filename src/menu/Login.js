import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import axios from "axios";
import styled from "styled-components";
import DonotHave from "../component/DonotHave";

export function Login({ className }) {
  return (
    <Fragment>
      <div className={className}>
        <div>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="800px"
            height="600px"
            viewBox="0 0 800 600"
            enableBackground="new 0 0 800 600"
            xmlSpace="preserve"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="174.7899"
              y1="186.34"
              x2="330.1259"
              y2="186.34"
              gradientTransform="matrix(0.8538 0.5206 -0.5206 0.8538 147.9521 -79.1468)"
            >
              <stop offset={0} style={{ stopColor: "#FFC035" }} />
              <stop offset="0.221" style={{ stopColor: "#F9A639" }} />
              <stop offset={1} style={{ stopColor: "#E64F48" }} />
            </linearGradient>
            <circle
              fill="url(#SVGID_1_)"
              cx="266.498"
              cy="211.378"
              r="77.668"
            />
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="290.551"
              y1="282.9592"
              x2="485.449"
              y2="282.9592"
            >
              <stop offset={0} style={{ stopColor: "#FFA33A" }} />
              <stop offset="0.0992" style={{ stopColor: "#E4A544" }} />
              <stop offset="0.9624" style={{ stopColor: "#00B59C" }} />
            </linearGradient>
            <circle fill="url(#SVGID_2_)" cx={388} cy="282.959" r="97.449" />
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="180.3469"
              y1="362.2723"
              x2="249.7487"
              y2="362.2723"
            >
              <stop offset={0} style={{ stopColor: "#12B3D6" }} />
              <stop offset={1} style={{ stopColor: "#7853A8" }} />
            </linearGradient>
            <circle
              fill="url(#SVGID_3_)"
              cx="215.048"
              cy="362.272"
              r="34.701"
            />
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="367.3469"
              y1="375.3673"
              x2="596.9388"
              y2="375.3673"
            >
              <stop offset={0} style={{ stopColor: "#12B3D6" }} />
              <stop offset={1} style={{ stopColor: "#7853A8" }} />
            </linearGradient>
            <circle
              fill="url(#SVGID_4_)"
              cx="482.143"
              cy="375.367"
              r="114.796"
            />
            <linearGradient
              id="SVGID_5_"
              gradientUnits="userSpaceOnUse"
              x1="365.4405"
              y1="172.8044"
              x2="492.4478"
              y2="172.8044"
              gradientTransform="matrix(0.8954 0.4453 -0.4453 0.8954 127.9825 -160.7537)"
            >
              <stop offset={0} style={{ stopColor: "#FFA33A" }} />
              <stop offset={1} style={{ stopColor: "#DF3D8E" }} />
            </linearGradient>
            <circle
              fill="url(#SVGID_5_)"
              cx="435.095"
              cy="184.986"
              r="63.504"
            />
          </svg>
          <div className="container rounded-top">
            <div className="fw-bold text-purple fs-2 text-uppercase ps-4  py-4">
              login ibrand
            </div>
            <form>
              <input type="text" className="username" placeholder="username" />
              <br />
              <input type="text" className="pwd" placeholder="password" />
            </form>

            <br />
            <button className="mt-2 d-flex signin w-100 justify-content-center align-items-center fs-5 rounded-bottom">
              <div className="d-flex hover-signin">sign in</div>
            </button>
            <h3>your registration is complete ! </h3>
            <h3>your sign in is complete !</h3>
            <div className="reg" />
            <div className="sig" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(Login)`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background: #e2e2e2;
  }

  svg {
    position: fixed;
    top: 10px;
    left: 180px;
  }

  .container {
    position: relative;
    top: 200px;
    left: 35%;
    display: block;
    margin-bottom: 80px;
    width: 500px;
    height: 360px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    z-index: 1;
  }
  @media (max-width: 1000px) {
    .container {
      left: 20%;
    }
  }
  @media (max-width: 767px) {
    .container {
      left: 15%;
    }
  }
  @media (max-width: 700px) {
    .container {
      left: 5%;
    }
  }
  @media (max-width: 500px) {
    .container {
      left: 0%;
    }
  }

  h2 {
    padding: 40px;
    font-weight: lighter;
    text-transform: uppercase;
    color: #414141;
  }

  input {
    display: block;
    height: 50px;
    width: 90%;
    margin: 0 auto;
    border: none;
    &::placeholder {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }
    &:hover,
    &:focus,
    &:active:focus {
      color: #ff5722;
      outline: none;
      border-bottom: 1px solid #ff5722;
      &::placeholder {
        color: #ff5722;
        position: relative;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
  }

  .username,
  .pwd {
    position: relative;
    z-index: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 20px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    color: #858585;
    font-weight: lighter;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .link {
    text-decoration: none;
    display: inline-block;
    margin: 27px 28%;
    text-transform: uppercase;
    color: #858585;
    font-weight: lighter;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  button {
    cursor: pointer;
    display: inline-block;
    float: left;
    width: 250px;
    height: 60px;
    margin-top: -10px;
    border: none;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    color: #fff;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    &:nth-of-type(1) {
      background: #673ab7;
    }
    &:nth-of-type(2) {
      background: #ff5722;
    }
  }

  .reg {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: translateY(-100%) scale(1);
    transform: translateY(-100%) scale(1);
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #673ab7;
    z-index: 5;
    -webkit-transition: 0.8s ease-in-out;
    transition: 0.8s ease-in-out;
  }

  .sig {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translateY(-100%) scale(1);
    transform: translateY(-100%) scale(1);
    display: block;
    width: 20px;
    height: 20px;
    display: block;
    background: #ff5722;
    z-index: 5;
    -webkit-transition: 0.8s ease-in-out;
    transition: 0.8s ease-in-out;
  }

  h3 {
    position: absolute;
    top: -100%;
    left: 20%;
    text-transform: uppercase;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.3);
    -webkit-transition: 0.3s ease-in-out 1.2s;
    transition: 0.3s ease-in-out 1.2s;
  }
`;