import React from 'react'

function Header({ title, name }) {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-">
        <a className="navbar-brand  fs-2 fw-bold text-danger" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto fs-5 ">
            
            <li className="nav-item me-3">
              <a className="nav-link" href="#aboutpage">About</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#project">Project</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#certificate">Certificates</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
