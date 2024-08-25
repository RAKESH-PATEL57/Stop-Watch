import {useState} from "react";
import "../scss/style.css";

let time = `00`;

function StopWatch()
{
    const [miliSeconds, miliUpdate] = useState(time);
    const [seconds, secUpdate] = useState(time);
    const [minutes, minUpdate] = useState(time);
    const [hours, hourUpdate] = useState(time);

    function start()
    {
        let milf = 0;
        let mils = 0;
       const mili = setInterval(() => 
        {
            if(mils>9)
            {
                mils=0;
                milf++;
            }
            if(milf>5)
            {
                milf=0;
            }
            miliUpdate(`${milf}${mils}`);
            mils++;
        },1);

       let secf=0;
       let secs=0;
       const sec = setInterval(() => 
        {
            if(secs>9)
            {
                secs=0;
                secf++;
            }
            if(secf>5)
            {
                secf=0;
            }
            secUpdate(`${secf}${secs}`);
            secs++;
        },1000);
       let minf=0;
       let mins=0;
       const min = setInterval(() => 
        {
            if(mins>9)
            {
                mins=0;
                minf++;
            }
            if(minf>5)
            {
                minf=0;
            }
            minUpdate(`${minf}${mins}`);
            mins++;
        },60000);

       let hourf=0;
       let hours=0;
       const hour = setInterval(() => 
        {
            if(hours>9)
            {
                hours=0;
                hourf++;
            }
            if(hourf>5)
            {
                hourf=0;
            }
            hourUpdate(`${hourf}${hours}`);
            hours++;
        },3600000);

    }


    return (
        <div className="stopWatch-container">
            <div className="timer">
               <span className="timer">{hours} : </span>
               <span className="timer">{minutes} : </span>
               <span className="timer">{seconds} : </span>
               <span className="timer">{miliSeconds}</span>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={start} id="startBtn">Start</button>
                <button className="btn" onClick={stop} id="stopBtn">Stop</button>
                <button className="btn" id="resetBtn">Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;