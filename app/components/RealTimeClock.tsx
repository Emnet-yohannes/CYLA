"use client";
import { useEffect, useState } from "react";
import { TextScramble } from "./TextScramble";
export default function RealTimeClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100px" }}>
      <TextScramble hoveringColor="#FF7A00">{time}</TextScramble>
    </div>
  );
}
