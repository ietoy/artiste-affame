// IMPORT REACT
import React, { useRef } from "react";
import API from "../../utils/API";
import Consumer from "../../configContext.js";

const LogIn = () => {
  const emailRef = useRef();
  const passRef = useRef();
  var val = true;

  return (
    <Consumer>
      {context => {

        function login() {
          API.login({
            email: emailRef.current.value,
            password: passRef.current.value
          }).then(res => {
            if (res.data.success) {
              val = true;
              console.log("LOGIN RES", res);
              context.login(res.data.success, res.data.user);
            }
          }).catch(err => {
            console.log("LOGIN ERROR", err);
            val = false;
            context.login(false);
          });
        }

        function valid() {
          if (!val) {
            return (<div>Invalid username or password</div>);
          }
        }


        return (
          <div className="container section">
            <div className="row">
              <div className="col s12">
                Enter email and password:
              </div>
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input key="email" ref={emailRef} type="email"></input>
                    <label>Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input key="pass" ref={passRef} type="password"></input>
                    <label >Password</label>
                  </div>
                </div>
                {valid()}
                <div className="row">

                </div>
                <div
                  className="btn waves-effect waves-light"
                  onClick={() =>
                    context.signup(
                      {
                        email: emailRef.current.value,
                        password: passRef.current.value
                      }
                    )}>Signup<i className="material-icons right">send</i>
                </div>
                <div
                  className="btn waves-effect waves-light"
                  onClick={() => login()}>Login<i className="material-icons right">send</i>
                </div>
              </form>
            </div>
          </div>
        )
      }}
    </Consumer>
  )
}

export default LogIn;