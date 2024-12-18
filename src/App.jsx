import React, { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import './App.css';
import InputField from "./components/InputField";
import firebase from "./firebase/firebase";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => setIsLogin(!isLogin);

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
          <form action="#" className="signup-form">
            <InputField type="text" placeholder="Full Name" icon="user" />
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
            <InputField
              type="password"
              placeholder="Confirm Password"
              icon="lock"
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
