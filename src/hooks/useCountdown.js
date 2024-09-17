import { useEffect, useState } from "react";

export const useCountdown = (props) => {
  const [countdown, setCountdown] = useState(props.time);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(props.time);
    }, 1000);
    return () => clearInterval(interval); 
  }, [])
  return countdown;
}