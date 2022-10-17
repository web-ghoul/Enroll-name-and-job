import { ReactDOM } from 'react';
import React from 'react';
import style from './header.css'
import image1 from '../../Img/scooter.svg'

function Header() {
  return (
    <header>
        <div className="contain">
            <h1>WebGhoul Demo</h1>
            <p>Add a Character with a name a job to the table.</p>
            <img src={image1} />
        </div>
    </header>
  );
}

export default Header;
