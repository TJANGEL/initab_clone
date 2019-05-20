import React from 'react';
import './style.css';
import { Z_UNKNOWN } from 'zlib';

function Navbar() {
  return (
    <div className='navbar navbar-inverse navbar-fixed-left'>
      <ul className='nav navbar-nav'>
        <li>
          <a href='#' className='settings'>
            <i class='fas fa-wrench' />
            SETTINGS
          </a>
        </li>
        <li>
          <a href='#' className='gists'>
            <i class='fas fa-code' />
            GISTS
          </a>
        </li>
        <li>
          <a href='#' className='stackOverflow'>
            <i class='fab fa-stack-overflow' />
            STACK OVERFLOW
          </a>
        </li>
        <li>
          <a href='#' className='trending'>
            <i class='fas fa-chart-line' />
            TRENDING
          </a>
        </li>
        <li>
          <a href='#' className='scratchPad'>
            <i class='fas fa-pencil-alt' />
            SCRATCH PAD
          </a>
        </li>
        <li>
          <a href='#' className='playground'>
            <i class='far fa-lightbulb' />
            PLAYGROUND
          </a>
        </li>
        <li>
          <a href='#' className='help'>
            <i class='fas fa-question' />
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
