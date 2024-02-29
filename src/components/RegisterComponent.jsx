import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
//import LinkedinLogo from "../assets/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueID";
//import "../Sass/LoginComponent.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleButton from 'react-google-button';

export default function RegisterComponent() {
   let navigate = useNavigate();
   const [credentails, setCredentials] = useState({});
   const register = async () => {
      try {
         let res = await RegisterAPI(credentails.email, credentails.password);
         toast.success("Account Created!");
         postUserData({
            userID: getUniqueID(),
            name: credentails.name,
            email: credentails.email,
            imageLink:
               "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
         });
         navigate("/home");
         localStorage.setItem("userEmail", res.user.email);
      } catch (err) {
         console.log(err);
         toast.error("Cannot Create your Account");
      }
   };

   const googleSignIn = () => {
      GoogleSignInAPI();
   };

   return (
      <div className="">
         {/* <img src={LinkedinLogo} className="linkedinLogo" /> */}
         <ToastContainer />
         <div className="">
            <h1 className="">Make the most of your professional life</h1>

            <div className="">
               <input
                  onChange={(event) =>
                     setCredentials({ ...credentails, name: event.target.value })
                  }
                  type="text"
                  className="common-input"
                  placeholder="Your Name"
               />
               <input
                  onChange={(event) =>
                     setCredentials({ ...credentails, email: event.target.value })
                  }
                  type="email"
                  className="common-input"
                  placeholder="Email or phone number"
               />
               <input
                  onChange={(event) =>
                     setCredentials({ ...credentails, password: event.target.value })
                  }
                  type="password"
                  className="common-input"
                  placeholder="Password (6 or more characters)"
               />
            </div>
            <button onClick={register} className="login-btn">
               Agree & Join
            </button>
         </div>
         <hr data-content="or" />
         <div className="">
            <p className="">
               Already on LinkedIn?{" "}
               <span className="" onClick={() => navigate("/")}>
                  Sign in
               </span>
            </p>
            <GoogleButton onClick={googleSignIn} />
         </div>
      </div>
   );
}