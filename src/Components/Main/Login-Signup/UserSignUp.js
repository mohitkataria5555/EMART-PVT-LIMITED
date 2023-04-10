import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import UserNav from "../../Navigation/UserNav";

var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var minPasswordLength = 7;
var maxPasswordLength = 13;
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
function UserSignUp() {
  const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [mobileNo, setMobileNo] = useState("");
const [userGet, setUserGet] = useState([]);

function change() {
navigate("/userlogin");
}

const setYourMobileNo = (e) => {
setMobileNo(e.target.value);
};

const setYourName = (e) => {
setName(e.target.value);
};

const setYourEmail = (e) => {
setEmail(e.target.value);
};

const setYourPassword = (e) => {
setPassword(e.target.value);
};

const register = () => {
const data = {
email: email,
name: name,
mobileNo: mobileNo,
password: password,
login: {
mobileNo: mobileNo,
email: email,
password: password,
loginStatus: "false",
},
};
if (mobileNo.length !== 10) {
alert("Please Enter 10 Digit Mobile No");
} else if (!email.endsWith("@gmail.com")) {
alert("Please Enter Email in right format");
} else if (!regName.test(name)) {
alert("Please Enter only Alphabate in Name");
} else if (password.length < minPasswordLength || password.length > maxPasswordLength) {
alert("PassWord Should have Minimum character of 7 and Maximum of 13");
} else if (!regularExpression.test(password)) {
alert("Password should contain at least one number and one special character");
} else {
const userExists = userGet.some((element) => element.email === email || element.mobileNo === mobileNo);
if (userExists) {
alert("User with same EMAIL or MOBILENO is already exist.");
} else {
axios.post("http://localhost:8080/customers/add", data)
.then((response) => {
if (response.data === "User Registered Successfully!!.") {
alert("Registration Failed!");
} else {
alert("Registration Successful!");
navigate("/userlogin");
}
});
}
}
};

useEffect(() => {
axios.get("http://localhost:8080/customers/all")
.then((response) => setUserGet(response.data));
}, []);

  return (
    <>
      <UserNav />
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://cdn2.vectorstock.com/i/1000x1000/31/56/amazon-logo-vector-39773156.jpg"
                height="550px"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h4 fw-bold mb-0">EMART</span>
                </div>

                <h2
                  className="fw-bold my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {" "}
                  User SignUp
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="name"
                  placeholder=" Your Name"
                  size="lg"
                  required
                  onChange={(e) => setYourName(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg2"
                  type="email"
                  placeholder=" Your Email"
                  size="lg"
                  required
                  onChange={(e) => setYourEmail(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg3"
                  type="number"
                  placeholder=" Your Mobile No"
                  size="lg"
                  required
                  onChange={(e) => setYourMobileNo(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg4"
                  type="password"
                  placeholder=" Your Password"
                  size="lg"
                  required
                  onChange={(e) => setYourPassword(e)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  onClick={register}
                  color="dark"
                  size="lg"
                >
                  SignUp
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Already have an account!{" "}
                  <a onClick={change} style={{ color: "#393f81" }}>
                    login
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default UserSignUp;
