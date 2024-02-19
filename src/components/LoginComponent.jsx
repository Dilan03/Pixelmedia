import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
//import LinkedinLogo from "../assets/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from 'react-google-button';

export default function LoginComponent() {
   let navigate = useNavigate();
   const [credentails, setCredentials] = useState({});
   const login = async () => {
      try {
         let res = await LoginAPI(credentails.email, credentails.password);
         toast.success("Signed In to Linkedin!");
         localStorage.setItem("userEmail", res.user.email);
         navigate("/home");
      } catch (err) {
         console.log(err);
         toast.error("Please Check your Credentials");
      }
   };



   const googleSignIn = async () => {

      // const register = async () => {
      //    try {
      //       let res = await RegisterAPI(credentails.email, credentails.password);
      //       toast.success("Account Created!");
      //       postUserData({
      //          userID: getUniqueID(),
      //          name: credentails.name,
      //          email: credentails.email,
      //          imageLink:
      //             "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      //       });
      //       navigate("/home");
      //       localStorage.setItem("userEmail", res.user.email);
      //    } catch (err) {
      //       console.log(err);
      //       toast.error("Cannot Create your Account");
      //    }
      // };

      let response = await GoogleSignInAPI();
      console.log(response._tokenResponse.email);
      console.log(response._tokenResponse.displayName);
      console.log(response._tokenResponse);

   };

   return (
      <div className="">
         {/* <img src={LinkedinLogo} className="" /> */}

         <div className="">
            <h1 className="">Sign in</h1>
            <p className="">Stay updated on your professional world</p>

            <div className="">
               <input
                  onChange={(event) =>
                     setCredentials({ ...credentails, email: event.target.value })
                  }
                  type="email"
                  className="common-input"
                  placeholder="Email or Phone"
               />
               <input
                  onChange={(event) =>
                     setCredentials({ ...credentails, password: event.target.value })
                  }
                  type="password"
                  className="common-input"
                  placeholder="Password"
               />
            </div>
            <button onClick={login} className="">
               Sign in
            </button>
         </div>
         <hr className="" data-content="or" />
         <div className="">
            <a className="">
               New to Pixelmedia?{" "}
               <span className="cursor-pointer" onClick={() => navigate("/register")}>
                  Join now
               </span>
            </a>
            <GoogleButton onClick={googleSignIn} />
         </div>
      </div>
   );
}
