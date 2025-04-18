import circlelist from '../assets/CircleListik.svg';
import React, {useState, useEffect} from 'react';
import '../styles/Timer.scss';
function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('May 10 2025 15:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({days, hours, minutes, seconds});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timer">
      <div className="listblock">
        <img src={circlelist} alt="Circle List" />
        <div className="listtext">
          May 10 <span></span> 3:30 PM
        </div>
      </div>
      <div className="gendertext">Gender party in</div>
      <div className="timerblock">
        <div className="timertext">
          {String(timeLeft.days).padStart(2, '0')}
          <div>Days</div>
        </div>
        <div className="timertext">
          {String(timeLeft.hours).padStart(2, '0')}
          <div>Hours</div>
        </div>
        <div className="timertext">
          {String(timeLeft.minutes).padStart(2, '0')}
          <div>Min</div>
        </div>
        <div className="timertext">
          {String(timeLeft.seconds).padStart(2, '0')}
          <div>Sec</div>
        </div>
      </div>
    </section>
  );
}

export default Timer;
