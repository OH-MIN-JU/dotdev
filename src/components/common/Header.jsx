import React, { useState } from 'react';
import ModeController from './ModeController';

import { navItems, authLink } from '../../constants/data';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg">
      <div className="container relative">
        <div className="nav-inside-wrapper flex items-center justify-between">
          <div className="logo-wrapper flex items-center gap-2">
            <div className="logo w-10 h-10 rounded-full border border-neutral-800/80 flex items-center justify-center">
              <div className="round-dot w-8 h-8 rounded-full bg-indigo-800"></div>
            </div>
            <span className="logo-text text-lg">AceDot.Dev</span>
          </div>
          <ul className="nav-wrapper hidden lg:flex gap-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="info-wrapper hidden lg:flex items-center gap-2">
            {authLink.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`py-2 px-3 rounded-md ${
                  idx === 1
                    ? 'bg-gradient-to-r from-indigo-400 to-indigo-800 text-neutral-200'
                    : 'border border-neutral-800/80'
                } `}
              >
                {item.label}
              </Link>
            ))}
            <ModeController />
          </div>

          <div className="mobile-menu lg:hidden flex gap-2">
            <button onClick={toggleMobileMenu}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
            <ModeController />
          </div>
        </div>

        {mobileOpen && (
          <div className="absolute right-0 z-50 bg-white w-full pb-0 flex top-full flex-col justify-center items-center dark:bg-neutral-900 border-b border-neutral-700 mt-1 lg:hidden">
            <ul className="w-full">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 border-b border-neutral-700 w-full text-center"
                >
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex py-4 gap-2">
              {authLink.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`py-2 px-3 rounded-md ${
                    idx === 1
                      ? 'bg-gradient-to-r from-indigo-400 to-indigo-800 text-neutral-200'
                      : 'border border-neutral-800/80'
                  } `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
