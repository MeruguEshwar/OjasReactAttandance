import React, { useEffect, useState } from "react";
import ojas from '../Images/ojas-logo.png';
import { useNavigate } from 'react-router-dom';
import LoginService from "../Services/LoginService";
import Toast from 'react-bootstrap/Toast';
import { Col, Row } from "react-bootstrap";
import { Button } from "bootstrap";

function Login() {

  const [email, setemail] = useState();
  const [pass, setpass] = useState();

  let navigate = useNavigate();

  const [luser, setluser] = useState([]);
  const [show, setShow] = useState(false);

  const getuserdetails = async (e) => {
    const userdata = await LoginService.getuser();
    setluser(userdata.data);
    console.log("User list is:" + JSON.stringify(luser));
  }

  useEffect(() => {
    getuserdetails();
  }, []);

  function login() {
    luser.find((std) => {
      console.log("map data:" + JSON.stringify(std));
      if (std.email == email && std.pass == pass) {
        // navigate("/prod");
        alert("login success..");
      }
    })
  }


  return (
    <div className="mt-5">
      <div
        className="card float-end mt-5 me-5"
        style={{ width: "24rem", height: "35rem" }}
      >
        <div className="card-body">
          <img src={ojas} className="card-img mx-auto d-block mt-4" alt="NetworkError"></img>
          <div className="mb-3 mt-4">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your pass"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="row d-flex align-items-start">
            <div className="col-sm-8 mt-4">
              <label htmlFor="formGroupExampleInput" className="form-label ms-1 text-muted">Forgot Password</label>
            </div>
            <div className="col-sm-4 mt-4">
              <button type="submit" className="btn btn-primary" onClick={login}>Sign in</button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-11 mt-4 d-flex justify-content-center btmtxt">
              <label htmlFor="formGroupExampleInput" className="form-label ms-4 mt-5 text-muted text-center">Powered By Ojas</label>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-11 mt-1 d-flex justify-content-center btmtxt">
              <label htmlFor="formGroupExampleInput" className="form-label ms-4 text-muted text-center">Ojas Innovative Inc Priavte Limited</label>
            </div>
          </div>

          <div className="row d-flex align-items-end mt-1 btmtxt">
            <div className="col-sm-4">
              <label htmlFor="formGroupExampleInput" className="form-label ms-1 text-muted">Cookie Policy</label>
            </div>
            <div className="col-sm-4">
              <label htmlFor="formGroupExampleInput" className="form-label ms-1 text-muted">Terms Of Use</label>
            </div>
            <div className="col-sm-4">
              <label htmlFor="formGroupExampleInput" className="form-label ms-1 text-muted">Privacy Policy</label>
            </div>
          </div>
        </div>
      </div>

      {[
        'Primary'
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
}

export default Login;
