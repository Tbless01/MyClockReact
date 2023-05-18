import { useState, useEffect } from "react";
import "../../dashboard/styles/my_clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  let [day, setDay] = useState("AM");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours <= 12) {
    day = "PM";
  } else if (hours === 0) {
    hours = 12;
  }

  return (
    <div className="container">
    <div className="mainContain">
      <h1 className="clock">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}
        <span className="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span> <span className="day">{day}</span>
      </h1>
    </div>
     </div>
  );
}

export default Clock;
