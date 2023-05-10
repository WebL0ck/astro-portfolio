import { useState, useEffect } from "react";

export const useRandomNumber = ({ initialValue = 1, start = 1, end = 10, timeout = 5000 }) => {
  const [randomNumber, setRandomNumber] = useState<number>(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * end) + 1;
      setRandomNumber(newNumber);
    }, timeout);

    return () => clearInterval(interval);
  }, []);

  return randomNumber;
};
