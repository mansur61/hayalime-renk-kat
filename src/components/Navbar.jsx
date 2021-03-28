import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Hayalime Renk KAT</Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Ana Sayfa </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Hakkında</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">İletişim</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/kayit_giris">Kayıt / Giriş </Link>
      </li>
     
    </ul>
  </div>
</nav>

    );

}
export default Navbar;