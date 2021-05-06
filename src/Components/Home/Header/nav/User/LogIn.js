import React from 'react'
import { Link } from "react-router-dom";

export const LogIn = () => {
    return (
        <form class="login-form">
        <h1>Login</h1>
        
          <input type="text" name="username" id="username" placeholder="username" autocomplete="off"  required />
        
          <input type="password" name="password" id="password" placeholder="password" autocomplete="off"  required />
        
        <button type="submit" class="btn btn-primary btn-ghost">Login</button> 
       <Link to="/Register"> <button type="submit" class="btn btn-primary btn-ghost">Sign up</button></Link>
      </form>
    );
};
