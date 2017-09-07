'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const Home = () => {
  return (
    <ul className='home-page'>
      <li>
        <Link className='summary' to={ alicePath('/summary') }>summary</Link>
      </li>
      <li>
        <Link className='names' to={ alicePath('/about-me/names') }>about-me-names</Link>
      </li>
      <li>
        <Link className='addresses' to={ alicePath('/about-me/addresses') }>addresses</Link>
      </li>
      <li>
        <Link className='contact-info' to={ alicePath('/about-me/contact') }>contacts</Link>
      </li>
      <li>
        <Link className='appearance-eye' to={ alicePath('/about-me/appearance/eye' )}>eye-color</Link>
      </li>
      <li>
        <Link className='appearance-hair' to={ alicePath('/about-me/appearance/hair') }>hair-color</Link>
      </li>
    </ul>
  );
};

export default Home;