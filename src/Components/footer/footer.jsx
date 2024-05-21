import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <img
            src="/assets/logo-1.png"
            onClick={() => (window.location.href = "https://pk.linkedin.com/")}
            alt="Logo"
          ></img>
        </li>
        <li>
          <img
            src="/assets/logo-2.png"
            onClick={() => (window.location.href = "https://github.com/m-j66")}
            alt="Logo"
          ></img>
        </li>
      </ul>
      <br />
      <p>&copy; 2024 Mahnoor Junaid</p>
    </div>
  );
};

export default footer;
