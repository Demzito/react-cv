import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <ul>
          <li className="hobby">
            <i className="fab fa-bitcoin"></i>
            <span>Crypto-monnaies</span>
          </li>
          <li className="hobby">
            <i className="fa-solid fa-dumbbell"></i>
            <span>Musculation</span>
          </li>
          <li className="hobby">
            <i className="fa-brands fa-twitch"></i>
            <span>Stream Twitch</span>
          </li>
          <li className="hobby">
            <i className="fas fa-rocket"></i>
            <span>Espace</span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Hobbies;
