import {useNavigate } from "react-router-dom";
import { Authcontext } from "../context/Auth";
import { useContext } from "react";
export const Login = () => {
  //  use reqres to log user in.
  const {handelAuth}=useContext(Authcontext)
  
const navigate=useNavigate()
  return (
    <form className="loginform" 
    onSubmit={(e)=>{
      e.preventDefault();
      handelAuth(true)
      navigate(-2,{replace:true})
    }}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
