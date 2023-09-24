import React, { useState, useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import './clock.css'

function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours} : ${minutes}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <span className='time-number'>
          {currentTime}
        </span>
      </div>
      <div className='bubble'>
        <FaUserPlus></FaUserPlus>
      </div>
    </div>
  );
}

export default Clock;
