import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { Modal, Button } from '@mui/material';
import Icon from "assets/images/Asset 7.svg";

const useStyles = makeStyles(() => ({
  container: {
    width: "85%",
    height: "70%",
    maxWidth: "800px",
    maxHeight: "600px",
    padding: "20px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#00142B",
    borderRadius: "20px",
    margin: "0 auto",
    top: "50%",
    left: "50%",
    transform: "translate(0%, 25%)",
  },
  icon: {
    height: "25%",
    padding: "10px",
    border: "1px solid rgba(255, 255, 255, .2)",
    borderRadius: "10px",
  },
  resultContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    lineHeight: "1.5",
  },
  title: {
    fontFamily: "Font",
    letterSpacing: "4px",
    color: "#f2ca4f",
    fontSize: "5rem",
    padding: "20px",
  },
  text: {
    fontFamily: "Font",
    letterSpacing: "4px",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#f9f9f9",
  },
  result: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#f2ca4f",
  },
  button: {
    color: "#f9f9f9",

  },
}))

const Notification = (props) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (props.status === true) {
      setIsOpen(true);
    }
  }, [props.status])

  return (
    <Modal
      open={isOpen}
      // open={props.status}
      onClose={handleClose}
    >
      <div className={styles.container}>
        <img src={Icon} alt="Icon" className={styles.icon} />

        <h1 className={styles.title}>Result</h1>
        <div className={styles.resultContainer}>
          <p className={styles.text}>Word:</p>
          <p className={styles.result}>{props.word}</p>

          <p className={styles.text}>Correct:</p>
          <p className={styles.result}>{props.correct}</p>

          <p className={styles.text}>Accuracy:</p>
          <p className={styles.result}>{
            // Math.round(props.character / 5)
            Math.round(100 * props.correct / props.word)
          }%</p>
        </div>
        <Button className={styles.button} variant="contained" color="success" onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
}

export default Notification;