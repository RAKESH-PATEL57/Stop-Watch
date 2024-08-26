import { useEffect, useState } from "react";
import "../scss/style.css";

let time = 0;

function StopWatch() {
  const [miliSeconds, miliUpdate] = useState(time);
  const [seconds, secUpdate] = useState(time);
  const [minutes, minUpdate] = useState(time);
  const [hours, hourUpdate] = useState(time);

  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let allTime = null;

    if (Running) 
    {
        allTime = setInterval(() => {
            miliUpdate((prevMili) => {
                if(prevMili === 10)
                {
                    secUpdate((prevSeconds) => {
                        if(prevSeconds === 59)
                        {
                            minUpdate((prevMin) => {
                                if(prevMin === 59)
                                {
                                    hourUpdate((prevHour) => prevHour+1)
                                    return 0;
                                }
                                else
                                {
                                    return prevMin+1;
                                }
                                    
                            })
                            return 0;
                        }
                        else
                        {
                            return prevSeconds+1;
                        }
                    })
                    return 0;
                }
                else
                {
                    return prevMili+1;
                }
            })
        },100)
    }

   
       return () => clearInterval(allTime);
    
  }, [Running]);

  function startTimer() {
    setRunning(true);
  }

  function stopTimer() {
    setRunning(false);
}

function resetTimer() {
    setRunning(false);
    miliUpdate(0);
    secUpdate(0);
    minUpdate(0);
    hourUpdate(0);
  }

  return (
    <div className="stopWatch-container">
      <div className="timer-container">
        <span className="timer">
        {hours<10? "0"+hours:hours} :
        {minutes<10? " 0"+minutes:" "+minutes} :    
        {seconds<10? " 0"+seconds:" "+seconds} :
        {miliSeconds<10? " 0"+miliSeconds:miliSeconds} 
        </span>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={startTimer} id="startBtn">
          Start
        </button>
        <button className="btn" onClick={stopTimer} id="stopBtn">
          Stop
        </button>
        <button className="btn" onClick={resetTimer} id="resetBtn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
