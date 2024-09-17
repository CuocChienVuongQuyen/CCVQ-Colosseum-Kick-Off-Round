import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Sound from "react-sound";
import Sound125s from "../Assets/125sSound.mp4";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    height: "80%",
    fontFamily: "Font",
    maxWidth: "250px",
    maxHeight: "250px",
  },
  timeCircle: {
    width: "100%",
    height: "100%",
    border: "18px solid #7D8791",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: "#D9E0E3",
  },
  timeProcess: {
    backgroundColor: "#D9E0E3",
    borderRadius: "10px",
    fontSize: "0.5em",
  },
  timeRemaining: {
    fontSize: "5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));

const Timer = (props) => {
  const { sleep, duration, current, setStatus, value, status } = props;

  const styles = useStyles();

  const [timer, setTimer] = useState(duration + sleep);
  const [elapsed, setElapsed] = useState(duration + sleep);
  const [isPlaying, setIsPlaying] = useState("PAUSE");
  // const [isPrepare, setIsPrepare] = useState(true);
  // const [timer, setTimer] = useState(3);

  // useEffect(() => {
  //   if (
  //     (status === "start" || typeof status === "number") &&
  //     timer > 0 &&
  //     current === value
  //   ) {
  //     const timeInterval = setInterval(() => {
  //       setTimer((prev) => prev - 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(timeInterval);
  //     };
  //   }
  //   if (timer === 0) {
  //     setStatus(value);
  //   }
  //   //eslint-disable-next-line
  // }, [timer, status, current]);

  useEffect(() => {
    if (
      (status === "start" || status === "pause" || status === "resume" || typeof status === "number") &&
      timer > 0 &&
      current === value
    ) {
      if(status === "start" || status === "resume" || typeof status === "number"){
        setIsPlaying("PLAYING");
        const timeInterval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 100);
        return () => {
          setIsPlaying("STOPPED");
          clearInterval(timeInterval);
        };
      }
      
      if(status === "pause"){
        setElapsed(timer);
        setIsPlaying("PAUSED");
      }
     }
    if (timer === 0) {
      setStatus(value);
    }
    //eslint-disable-next-line
  }, [timer, status, current]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.timeCircle}>
        <h1 className={styles.timeRemaining}>
          {(timer > duration) ? timer - duration : timer}
        </h1> 
      </div> */}
      <Sound
        volume={40}
        url={Sound125s}
        playStatus={isPlaying}
      />
      <CircularProgressbar
        value= {(timer > duration) ? (timer - duration)/10 : (duration - timer)/10}
        text={(timer > duration) ? Math.round((timer - duration)/10) : Math.round(timer/10)}
        maxValue= {(timer > duration) ? sleep/10: duration/10}
        strokeWidth={6}
        styles={buildStyles({
          pathColor: "#90433d",
          textColor: "#90433d",
          trailColor: '#d3bda5',
          textSize: "50px",
        })}
      />
    </div>
  );
};

export default Timer;
