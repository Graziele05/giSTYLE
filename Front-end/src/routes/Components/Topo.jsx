import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell, faUser, faQuestionCircle, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Topo.css';

const Topo = () => {
  return (
    <header className='topo'>
      
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/Front-end/public/gistylelogo.png" alt="Gis.Style Logo" />
          </a>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Pesquise aqui" />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      
      <nav className="navigation">
        <ul>
          <li><a href="/"><FontAwesomeIcon icon={faHeart} /> Favoritos</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faBell} /> Notificações</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faQuestionCircle} /> Ajuda</a></li>
          <li><a href="/"><FontAwesomeIcon icon={faShoppingCart} /> Compras</a></li>
        </ul>
      </nav>
     
      <div className='barra2'></div> <div className='barra'></div>

    </header>
    
  );
};

export default Topo;
