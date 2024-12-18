import React, { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import './App.css';
import InputField from "./components/InputField";
import firebase, { auth } from "./firebase/firebase";
import { setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => setIsLogin(!isLogin);
  // const setIsRegister = async (e) =>{
  //   await setDoc(doc(db,"users",res.user.uid),
  //   {
  //     username,
  //     email,
  //     password,
  //     confirmpassword
  //   });
  //   setIsLogin(true);
  // } 
  const handleRegister = async (e) =>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password,confirmpassword);
      const user =auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="login-container">
          <h2 className="form-title">Log in with</h2>
          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
            <a href="#" className="forgot-password-link">Forgot password?</a>
            <button type="submit" className="auth-button">Log In</button>
          </form>
          <p className="auth-toggle">
            Don&apos;t have an account?{" "}
            <a href="#" className="toggle-link" onClick={toggleAuthPage}>
              Sign up
            </a>
          </p>
          <p className="separator"><span>or</span></p>
          <SocialLogin />
        </div>
      ) : (
        <div className="signup-container">
          <h2 className="form-title">Sign up with</h2>
          <form action="#" className="signup-form" onClick={handleRegister}>
            <InputField type="text" placeholder="Full Name" icon="user" name="user"/>
            <InputField type="email" placeholder="Email address" icon="mail" name="email" />
            <InputField type="password" placeholder="Password" icon="lock" name="password" />
            <InputField
              type="password"
              placeholder="Confirm Password"
              icon="lock"
              name="conformpassword"
            />
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p className="auth-toggle">
            Already have an account?{" "}
            <a href="#" className="toggle-link" onClick={toggleAuthPage}>
              Log in
            </a>
          </p>
          <p className="separator"><span>or</span></p>
          <SocialLogin />
        </div>
      )}
    </div>
  );
};

export default AuthPage;