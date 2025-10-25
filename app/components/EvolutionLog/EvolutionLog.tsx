"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
// @ts-ignore: Ignore missing type declarations for side-effect CSS import
import "@xterm/xterm/css/xterm.css";

export default function EvolutionLog() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<Terminal | null>(null);
  
  const logs = [
    { time: "10:02:11", message: "Starting build...", type: "info" },
    { time: "10:02:13", message: "Fetching dependencies...", type: "info" },
    { time: "10:02:15", message: "Warning: deprecated package found", type: "warn" },
    { time: "10:02:18", message: "Build completed successfully ✅", type: "success" },
  ];

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new Terminal({
      theme: {
        background: "#1e1e1e",
        foreground: "#d1d5db",
        cursor: "#00ff88",
      },
      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
      fontSize: 14,
      cursorBlink: true,
      rows: 20,
    });

    term.current.open(terminalRef.current);

    let index = 0;
    const interval = setInterval(() => {
      if (index >= logs.length) {
        clearInterval(interval);
        return;
      }

      const { time, message, type } = logs[index];
      let color = "\x1b[37m"; // default white

      if (type === "warn") color = "\x1b[33m"; // yellow
      if (type === "error") color = "\x1b[31m"; // red
      if (type === "success") color = "\x1b[32m"; // green

      term.current?.writeln(`${color}[${time}] ${message}\x1b[0m`);
      index++;
    }, 800);

    return () => {
      term.current?.dispose();
      clearInterval(interval);
    };
  }, []);

  return (

    <div
  className="rounded-lg overflow-hidden w-2/3 mx-auto my-8 "
  
>
  <div className="flex items-center gap-2 px-3 py-2 bg-[#2b2b2b]">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-400" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
  </div>

  <div ref={terminalRef} className="h-[400px] p-2 bg-transparent" />
</div>

  );
}
