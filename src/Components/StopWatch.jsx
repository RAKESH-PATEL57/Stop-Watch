import React, {useState} from "react";
import "../scss/style.css";

let time = `00:00:00:00`;

function StopWatch()
{
    const [initialTime, updateTime] = useState(time);

    function start()
    {
        let miliSeconds = "00";
        let seconds = "00";
        let minutes = "00";
        let hours = "00";
        updateTime(`${hours}:${minutes}:${seconds}:${miliSeconds}`);
    }

    return (
        <div className="stopWatch-container">
            <span className="timer">{initialTime}</span>
            <div className="btn-container">
                <button className="btn" onClick={start} id="startBtn">Start</button>
                <button className="btn" id="stopBtn">Stop</button>
                <button className="btn" id="resetBtn">Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;