import React, { useState } from "react";
import Login from "./Login";


const Registration = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [login, setLogin] = useState(true);

function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password || !phone) {
         
          } else {
          
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            console.log("Saved in Local Storage");
      
            setLogin(!login);
          }
}

function handleClick() {
    setLogin(!login);
  
  }


  return (
    <div>
         {" "}
          {login ? (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
                <label>Name</label>
                <input
                   type="text"
                   className="form-control"
                   placeholder="Enter Full Name"
                   onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
            </button>
            <p className="forgot-password text-right" onClick={handleClick}>
                Already registered{" "}log in?
                
              </p>

        </form>
):(         
           <Login />
  )}
    </div>
  )
}
export default Registration