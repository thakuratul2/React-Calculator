import React, { Fragment } from 'react'

function Navbar(props) {
  return (
    <Fragment>
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutTitle}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.contactTitle}</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav></div>
  </Fragment>
  )
}

export default Navbar