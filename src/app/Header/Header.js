import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div style={{width:"100%"}}>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand applogo" href="#">APP LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

        </li>
      </ul>
      <form className="d-flex " role="search">
      <Link href="/"><button className="btn m-1 navMenu" type="submit">DASHBOARD</button></Link>
<Link href="create-ad"><button className="btn m-1 navMenu" type="submit">CREATE ADS</button></Link>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header