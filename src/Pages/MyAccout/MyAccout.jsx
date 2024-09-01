import React, { useRef, useState } from "react";
import Header from "../../Components/Header";
import "./MyAccount.css"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function MyAccout({ TimeDelay }) {
  if (TimeDelay === 0) return;
  const [delay, setDelay] = useState(TimeDelay);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const [showPass, setShowPass] = useState(false);

  const togglePassVisibility = () => {
    setShowPass(!showPass)
  }

  return (
    <>
      <Header delay={delay} />
      <section className="Account">
        <div className="Account-container">
          <div className="Account-content">
            <div className="Account-heading">
              <h2>MY ACCOUNT</h2>
              <p>Your data and latest orders</p>
            </div>
            <div className="Account-box">

              <div className="Account-Login">
                <div className="Account-login-container">
                  <div className="Account-login-heading">
                    <h3>LogIn</h3>
                  </div>
                  <div className="Account-login-box">
                    <div className="Account-login-content">
                      <div className="Account-login-email">
                        <p>Username or email address</p>
                        <input type="text"/>
                      </div>
                      <div className="Account-login-Password">
                        <p>Password</p>
                        <div className="loginput">
                          <input type={showPass ? "text" : "password"} />
                          {showPass ? (
                            <IoMdEyeOff className="eyeicon" onClick={togglePassVisibility} />
                          ) : ( <IoEye className="eyeicon" onClick={togglePassVisibility} />)}
                        </div>
                      </div>
                      <p className="ForgPass">Forgot your password?</p>
                      <button>Login</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="Account-Login">
                <div className="Account-login-container">
                  <div className="Account-login-heading">
                    <h3>Register</h3>
                  </div>
                  <div className="Account-login-box">
                    <div className="Account-login-content">
                      <div className="Account-login-email">
                        <p>Email address</p>
                        <input type="text"/>
                      </div>
                      <div className="Account-login-Password">
                        <p>Password</p>
                        <div className="loginput">
                          <input type={showPassword ? "text" : "password"} />
                          {showPassword ? (
                            <IoMdEyeOff className="eyeicon" onClick={togglePasswordVisibility} />
                          ) : ( <IoEye className="eyeicon" onClick={togglePasswordVisibility} />)}
                        </div>
                      </div>
                      <p className="RegMesg">I declare that I accept the terms and conditions described in the <span> privacy policy</span>.</p>
                      <button>Register</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAccout;
