import React from 'react'
import ProductNavigation from '../../Navigation/ProductNavigation'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import classes from "./UserProfile.module.css";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
 const navigate = useNavigate();
 const [backData, SetBacKData] = useState([]);
  let mobiledata = parseInt(sessionStorage.getItem("data"));
  console.log(mobiledata)

 
  useEffect(() => {
    axios
      .get(`http://localhost:8080/customers/${mobiledata}`)
      .then((response) => {
        console.log(response.data);
        SetBacKData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
        

 

  return (
    <div>
        <ProductNavigation/>
        <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740"
                    alt="avatar"
                  className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />{" "}
                  <br />
           
                  <p className="text-muted mb-1">
                    <h5>Welcome, {backData.name}</h5>
                  </p>
                </MDBCardBody>
              </MDBCard>
              
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name:  {backData.name}</MDBCardText>
                      
                    </MDBCol>
                    <MDBCol sm="9">
                     
                      
                    </MDBCol>
                  </MDBRow>

                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted"
                        style={{
                          marginRight: "16rem",
                          textDecoration: "none",
                        }}
                      >
                        {backData.email}{" "}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
<MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted"
                        style={{
                          marginRight: "18rem",
                          textDecoration: "none",
                        }}
                      >
                        {backData.mobileNo}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
    </div>
  )
}

export default Profile
