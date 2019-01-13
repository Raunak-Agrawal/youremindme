import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
export default function Footer() {
  return (
    <div>
      <ul className="auth-footer">
        <li>
          <Link to="/">Conditions</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Terms</Link>
        </li>
      </ul>
      <p className="footer-text text-center">
        copyright © 2018 Bootstrapdash. All rights reserved.
      </p>
    </div>
  );
}
