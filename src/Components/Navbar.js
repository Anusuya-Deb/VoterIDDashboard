import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


function Navbar() {

  return (
    <div className="container-fluid">
      <div className="row" style={{marginTop:'0px',width:'900px'}}>
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div className="mt-2">
            <a href="/" className="text-decoration-none ms-4 d-flex aign-items-center text-white d-none d-sm-inline" role="button">
              <span className="f5-4">VoterID Portal</span>
            </a>
            <hr className="text-white d-none d-sm-block"></hr>
            <ul class="nav nav-pills flex-column" id="parentM">
              <li class="nav-item  my-1">
                <a href="/Guidelines" class="nav-link text-white" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2">Guidelines </span>
                </a>
              </li>
              <li class="nav-ite m my-1">
                <a href="#submenu" class="nav-link text-white" data-bs-toggle = "collapse" aria-current="page">
                  <i className="bi bi-grid"></i>
                  <span className="ms-2">Voters</span>
                  <i className="bi bi-arrow-down-short ms-3"></i>
                </a>

                <ul class="nav justify-content-center  " id='submenu' data-bs-parent = "#parentM">
                
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/AddVoters" aria-current="page">Add Voters</a>
                    </li>
                 
                </ul>
              </li>
              <li class="nav-item my-1">
                <a href="/VoterID" class="nav-link text-white" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2">VoterID</span>
                </a>
              </li>

              <li class="nav-item my-1">
                <a href="/Logout" class="nav-link text-white" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
