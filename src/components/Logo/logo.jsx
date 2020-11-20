import React from 'react';
import logo from '../../assets/logo_funkochar.png'; // Tell webpack this JS file uses this image

function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" width="25%" height="25%" />;
}

export default Logo;