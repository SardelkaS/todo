import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
    <div className="nav-wrapper purple lighten-3 px1">
      <a href="/" className="brand-logo">TS+R</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Tasks</a></li>
        <li><a href="/">Info</a></li>
      </ul>
    </div>
  </nav>
)