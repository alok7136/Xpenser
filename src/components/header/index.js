import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Daily Xpenser
          <i class="fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a
            href="https://github.com/alok7136/REDUX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
