import React, { useState } from "react";
import Dashboard from "./Navbar";

function Login() {

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
   
    

    if (!emaillog || !passwordlog) {
     console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
     
    } else {
      setHome(!home);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
 
        </form>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Login;