import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
//import LinkedinLogo from "../assets/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from 'react-google-button'

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

   const googleSignIn = () => {
      GoogleSignInAPI();
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
               <span className="" onClick={() => navigate("/register")}>
                  Join now
               </span>
            </a>
            <GoogleButton
               onClick={googleSignIn}
            />
         </div>
      </div>
   );
}
