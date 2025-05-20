import React from 'react';
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from '../../constants/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="footer-title">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
