import React from 'react';
import './style.css';
import { Z_UNKNOWN } from 'zlib';

function Navbar() {
  return (
    <div className='navbar navbar-inverse navbar-fixed-left'>
      <ul className='nav navbar-nav'>
        <li>
          <a href='#' className='settings'>
            SETTINGS
          </a>
        </li>
        <li>
          <a href='#' className='gists'>
            GISTS
          </a>
        </li>
        <li>
          <a href='#' className='stackOverflow'>
            STACK OVERFLOW
          </a>
        </li>
        <li>
          <a href='#' className='trending'>
            TRENDING
          </a>
        </li>
        <li>
          <a href='#' className='scratchPad'>
            SCRATCH PAD
          </a>
        </li>
        <li>
          <a href='#' className='playground'>
            PLAYGROUND
          </a>
        </li>
        <li>
          <a href='#' className='help'>
            HELP/INFO
          </a>
        </li>
      </ul>
      <ul>
        <a className='navbar-brand' href='#'>
          Brand
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
