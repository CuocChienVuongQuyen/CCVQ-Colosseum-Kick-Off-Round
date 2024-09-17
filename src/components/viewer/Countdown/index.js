import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Slider from '@mui/material/Slider';

import Background from "assets/images/background2024.png";
import Sound from "react-sound";
import Timer from "./Timer";

const useStyles = makeStyles(() => ({
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "center",
    alignItems: "center",
    // display: "flex",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  timerContainer: {

  },
  hintKey: {
    gridColumnStart: "3",
    textAlign: "center",
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
}));

const  Countdown = () => {
  const styles = useStyles();
  const [questions, setQuestions] = useState(10);

  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("end");
  // const [hintKey, setHintKey] = useState("Enter");
  // const [changeTable, setChangeTable] = useState(false);

  // sound
  const [soundStatus, setSoundStatus] = useState("STOPPED");

  const handleAction = () => {
    if(status === "end") {
      setStatus("start");
      setCurrent(1);
    }
    if(status === "start" || status === "resume" || typeof status === "number") {
      setStatus("pause");
    }
    else {
      setStatus("resume");
    }
  }
  
  useEffect(() => {
    console.log("stopped");
    if(status === "pause" || status === "resume") {
      setStatus(status);
    }
    if (typeof status === "number") {
      setCurrent((prev) => prev + 1);
    }
  }, [status]);

  // sound
  useEffect(() => {
    if(status === "start" || status === "resume" || typeof status === "number") {
      setSoundStatus("PLAYING");
    }
    if(status === "pause") {
      setSoundStatus("PAUSE");
    }

  }, [status]);

  return (
    <div className={styles.container} tabIndex={1} >
      <Sound
        url="./Assets/120s.wav"
        status={soundStatus}
        
      />
      <div style={{
        position: "relative",
        top: "5%",
        display: "grid",
        padding: "100px",
        gridTemplateColumns: `repeat(${questions/2}, 1fr)`,
        gridTemplateRow: `repeat(${2}, 1fr)`,
        gridRowGap: "6rem",
      }}>
        {Array.from(Array(questions).keys()).map((value) => (
          <Timer
            sleep={30}
            duration={1200}
            timerStyle="countdown"
            keys={value + 1}
            value={value + 1}
            current={current}
            setStatus={setStatus}
            status={status}
          />
        ))}
        <div style={{ 
          position: "fixed",
          bottom: "5%",
          left: "47%",
        }}> 
          <Button 
            style={{ gridColumnStart: "3", textAlign: "center", width: "50px", height: "50px" }}
            variant="outlined" 
            color={status === "pause" ? "success" : "primary"}
            onClick={() => handleAction()}
            > 
            {status === "pause" ? "Pause" : status === "resume" ? "Resume" : "Start"} 
          </Button>
        </div>
        <div style={{
          position: 'fixed',
          bottom: '2%',
          right: '2%',
          transform: 'translate(-50%, -50%)',
          width: "100px",
        }}>
          <Slider defaultValue={10} step={1} marks min={1} max={10} onChange={(e) => setQuestions(e.target.value)}/>
        </div>
      </div>
      
      <img className={styles.background} alt="background" src={Background} />
    </div>
  );
};

export default Countdown;
