import React,{useState} from 'react'
import { Link } from "react-router-dom";
import axios from "../../../../../axios"
import FormData from "form-data"
import { Alert } from 'reactstrap';

export const LogIn = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogIn = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username",username);
    formData.append("password",password);

    axios.post("/SignIn", formData)
        .then((res)=>{
      window.location.href = "/";
    }).catch((error)=>alert(error.response.data.error));
  };

    return (
        <form class="login-form">
        <h1>Login</h1>
        
          <input type="text" name="username" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}  required />
        
          <input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit" class="btn btn-primary btn-ghost" onClick={submitLogIn} >Login</button> 
       <Link to="/Register"> <button type="submit" class="btn btn-primary btn-ghost">Sign up</button></Link>
      </form>
    );
};
 