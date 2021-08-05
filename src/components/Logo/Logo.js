import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className=' mt3'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 90, width: 90 }} >
        <div className="Tilt-inner pa3">
          <img alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;