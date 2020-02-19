// IMPORT REACT
import React, {useRef} from "react";
import Consumer from "../../configContext.js";

const LogIn = () => {
  const emailRef = useRef();
  const passRef = useRef();

  return(
    <Consumer>
      {context =>{
        return(
          <div className="container">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input key="email" ref={emailRef}></input>
                    <label>Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input key="pass" ref={passRef} type="password"></input>
                    <label >Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                  We make notes
                  </div>
                </div>
                <div
                  className="btn waves-effect waves-light"
                  onClick={() => 
                    context.login(
                      {
                        email: emailRef.current.value,
                        password: passRef.current.value
                      }
                    )}>Submit<i className="material-icons right">send</i>
                </div>
              </form>
            </div>
          </div>
        )
      }}
    </Consumer>
)}

export default LogIn;