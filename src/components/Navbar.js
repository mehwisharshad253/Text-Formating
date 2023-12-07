import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>

      
    <button className={`btn bg-primary mx-2 text-${props.mode==='light'?'balck':'white'}`} onClick={()=>{props.toggleMode('primary')}} style={{width:'30px',height:'30px'}}></button>
    <button className='btn bg-secondary mx-2' onClick={()=>{props.toggleMode('secondary')}} style={{width:'30px',height:'30px'}}></button>
    <button className='btn bg-warning mx-2' onClick={()=>{props.toggleMode('warning')}} style={{width:'30px',height:'30px'}}></button>
    <button className='btn bg-danger mx-2' onClick={()=>{props.toggleMode('danger')}} style={{width:'30px',height:'30px'}}></button>
    <button className='btn bg-success mx-2' onClick={()=>{props.toggleMode('success')}} style={{width:'30px',height:'30px'}}></button>

      <div className={`form-check form-switch text-${props.mode==='light'?'balck':'white'} `}>
  <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.btn}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


Navbar.propTypes={title:PropTypes.string,
                  about:PropTypes.string}